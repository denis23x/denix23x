import { type demoReview, Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { PageNumberPaginationMeta } from "prisma-extension-pagination";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const bookId: string | null = searchParams.get("bookId");
	const userId: string | null = searchParams.get("userId");
	const page: number = Number(searchParams.get("page")) || 1;
	const size: number = Number(searchParams.get("pageSize")) || 10;

	const demoReviewArgs: Prisma.demoReviewFindManyArgs = {};

	if (userId) {
		demoReviewArgs.where = {
			...demoReviewArgs.where,
			userId: Number(userId),
		};
	}

	if (bookId) {
		demoReviewArgs.where = {
			...demoReviewArgs.where,
			bookId: Number(bookId),
		};
	}

	const [reviews, meta]: [demoReview[], PageNumberPaginationMeta] = await prisma.demoReview
		.paginate(demoReviewArgs)
		.withPages({
			limit: size,
			page: page,
			includePageCount: true,
		});

	return NextResponse.json({
		data: reviews,
		pagination: meta,
		status: 200,
	});
}
