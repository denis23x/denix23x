import { Prisma, type demoBook } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { PageNumberPaginationMeta } from "prisma-extension-pagination";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const search: string | null = searchParams.get("search");
	const userId: string | null = searchParams.get("userId");
	const page: number = Number(searchParams.get("page")) || 1;
	const size: number = Number(searchParams.get("pageSize")) || 10;

	const demoBookArgs: Prisma.demoBookFindManyArgs = {};

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
			userId: Number(userId),
		};
	}

	const [books, meta]: [demoBook[], PageNumberPaginationMeta] = await prisma.demoBook.paginate(demoBookArgs).withPages({
		limit: size,
		page: page,
		includePageCount: true,
	});

	return NextResponse.json({
		data: books,
		pagination: meta,
		status: 200,
	});
}
