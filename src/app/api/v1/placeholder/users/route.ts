import { NextRequest, NextResponse } from "next/server";
import { type demoUser, Prisma } from "@prisma/client";
import type { PageNumberPaginationMeta } from "prisma-extension-pagination";
import { handleErr, prisma } from "@/lib/prisma";
import { userSchema } from "./schema";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const search: string | null = searchParams.get("search");

	try {
		const demoUserArgs: Prisma.demoUserFindManyArgs = {};

		if (search) {
			demoUserArgs.where = {
				...demoUserArgs.where,
				name: {
					contains: search,
					mode: "insensitive",
				},
			};
		}

		const [users, meta]: [demoUser[], PageNumberPaginationMeta] = await prisma.demoUser
			.paginate(demoUserArgs)
			.withPages({
				limit: Number(searchParams.get("pageSize")) || 10,
				page: Number(searchParams.get("page")) || 1,
				includePageCount: true,
			});

		return NextResponse.json({
			data: users,
			pagination: meta,
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}

export async function POST(req: NextRequest) {
	try {
		return NextResponse.json({
			data: await prisma.demoUser.create({ data: userSchema.parse(await req.json()) }),
			status: 201,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}
