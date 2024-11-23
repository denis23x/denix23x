import { NextRequest, NextResponse } from "next/server";
import { type demoUser, Prisma } from "@prisma/client";
import type { PageNumberPaginationMeta } from "prisma-extension-pagination";
import { prisma } from "@/lib/prisma";
import { moderate, ModerationError } from "@/lib/openai";
import type { Moderation } from "openai/resources/moderations";
import { handleErr } from "@/lib/server";
import { userSchema } from "@/app/api/v1/placeholder/_schemas/usersSchema";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const include: string[] = searchParams.getAll("include");
	const search: string | null = searchParams.get("search");

	try {
		const demoUserFindManyArgs: Prisma.demoUserFindManyArgs = {};

		if (include.length) {
			include.forEach((i: string) => {
				demoUserFindManyArgs.include = {
					...demoUserFindManyArgs.include,
					[i]: true,
				};
			});
		}

		if (search) {
			demoUserFindManyArgs.where = {
				...demoUserFindManyArgs.where,
				name: {
					contains: search,
					mode: "insensitive",
				},
			};
		}

		const [users, meta]: [demoUser[], PageNumberPaginationMeta] = await prisma.demoUser
			.paginate(demoUserFindManyArgs)
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
		const data = userSchema.parse(await req.json());
		const demoUserCreateArgs: Prisma.demoUserCreateArgs = { data };

		if ((await moderate(data)).results.some((m: Moderation) => m.flagged)) {
			throw new ModerationError();
		}

		return NextResponse.json(
			{
				data: await prisma.demoUser.create(demoUserCreateArgs),
				status: 201,
			},
			{
				status: 201,
			}
		);
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}
