import { NextRequest, NextResponse } from "next/server";
import { type demoUser, Prisma } from "@prisma/client";
import type { PageNumberPaginationMeta } from "prisma-extension-pagination";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const search: string | null = searchParams.get("search");
	const page: number = Number(searchParams.get("page")) || 1;
	const size: number = Number(searchParams.get("pageSize")) || 10;

	const demoUserArgs: Prisma.demoUserFindManyArgs = {};

	if (search) {
		demoUserArgs.where = {
			...demoUserArgs.where,
			OR: [
				{
					firstName: {
						contains: search,
						mode: "insensitive",
					},
				},
				{
					lastName: {
						contains: search,
						mode: "insensitive",
					},
				},
			],
		};
	}

	const [users, meta]: [demoUser[], PageNumberPaginationMeta] = await prisma.demoUser.paginate(demoUserArgs).withPages({
		limit: size,
		page: page,
		includePageCount: true,
	});

	return NextResponse.json({
		data: users,
		pagination: meta,
		status: 200,
	});
}
