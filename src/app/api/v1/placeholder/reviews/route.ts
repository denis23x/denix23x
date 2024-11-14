import { NextRequest, NextResponse } from "next/server";
import { type demoReview, Prisma } from "@prisma/client";
import type { PageNumberPaginationMeta } from "prisma-extension-pagination";
import { handleErr, prisma } from "@/lib/prisma";
import { reviewSchema } from "./schema";
import { z } from "zod";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const bookId: string | null = searchParams.get("bookId");
	const userId: string | null = searchParams.get("userId");

	try {
		const demoReviewArgs: Prisma.demoReviewFindManyArgs = {};

		if (userId) {
			demoReviewArgs.where = {
				...demoReviewArgs.where,
				userId: z.number().parse(Number(userId)),
			};
		}

		if (bookId) {
			demoReviewArgs.where = {
				...demoReviewArgs.where,
				bookId: z.number().parse(Number(bookId)),
			};
		}

		const [reviews, meta]: [demoReview[], PageNumberPaginationMeta] = await prisma.demoReview
			.paginate(demoReviewArgs)
			.withPages({
				limit: Number(searchParams.get("pageSize")) || 10,
				page: Number(searchParams.get("page")) || 1,
				includePageCount: true,
			});

		return NextResponse.json({
			data: reviews,
			pagination: meta,
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}

export async function POST(req: NextRequest) {
	try {
		const { userId, bookId, ...data } = await req.json();

		return NextResponse.json({
			data: await prisma.demoReview.create({
				data: {
					...reviewSchema.parse(data),
					user: {
						connect: {
							id: z.number().parse(Number(userId)),
						},
					},
					book: {
						connect: {
							id: z.number().parse(Number(bookId)),
						},
					},
				},
			}),
			status: 201,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}
