import { NextRequest, NextResponse } from "next/server";
import { Prisma, type demoBook } from "@prisma/client";
import type { PageNumberPaginationMeta } from "prisma-extension-pagination";
import { handleErr, prisma } from "@/lib/prisma";
import { bookSchema } from "./schema";
import { z } from "zod";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const search: string | null = searchParams.get("search");
	const userId: string | null = searchParams.get("userId");

	try {
		const demoBookArgs: Prisma.demoBookFindManyArgs = {
			select: {
				id: true,
				title: true,
				description: true,
				cover: true,
				genre: true,
				createdAt: true,
				updatedAt: true,
				user: true,
			},
		};

		if (search) {
			demoBookArgs.where = {
				...demoBookArgs.where,
				title: {
					contains: search,
					mode: "insensitive",
				},
			};
		}

		if (userId) {
			demoBookArgs.where = {
				...demoBookArgs.where,
				userId: z.number().parse(Number(userId)),
			};
		}

		const [books, meta]: [demoBook[], PageNumberPaginationMeta] = await prisma.demoBook
			.paginate(demoBookArgs)
			.withPages({
				limit: Number(searchParams.get("pageSize")) || 10,
				page: Number(searchParams.get("page")) || 1,
				includePageCount: true,
			});

		return NextResponse.json({
			data: books,
			pagination: meta,
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}

export async function POST(req: NextRequest) {
	try {
		const { userId, ...data } = await req.json();

		return NextResponse.json({
			data: await prisma.demoBook.create({
				data: {
					...bookSchema.parse(data),
					user: {
						connect: {
							id: z.number().parse(Number(userId)),
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
