import { NextRequest, NextResponse } from "next/server";
import { Prisma, type demoPost } from "@prisma/client";
import type { PageNumberPaginationMeta } from "prisma-extension-pagination";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { handleErr } from "@/lib/server";
import { moderate, ModerationError } from "@/lib/openai";
import type { Moderation } from "openai/resources/moderations";
import { postSchema } from "@/app/api/v1/placeholder/_schemas/postsSchema";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const include: string[] = searchParams.getAll("include");
	const search: string | null = searchParams.get("search");
	const userId: string | null = searchParams.get("userId");

	try {
		const demoPostFindManyArgs: Prisma.demoPostFindManyArgs = {};

		if (include.length) {
			include.forEach((i: string) => {
				demoPostFindManyArgs.include = {
					...demoPostFindManyArgs.include,
					[i]: true,
				};
			});
		}

		if (search) {
			demoPostFindManyArgs.where = {
				...demoPostFindManyArgs.where,
				title: {
					contains: search,
					mode: "insensitive",
				},
			};
		}

		if (userId) {
			demoPostFindManyArgs.where = {
				...demoPostFindManyArgs.where,
				userId: z.coerce.number().min(1).parse(userId),
			};
		}

		const [posts, meta]: [demoPost[], PageNumberPaginationMeta] = await prisma.demoPost
			.paginate(demoPostFindManyArgs)
			.withPages({
				limit: Number(searchParams.get("pageSize")) || 10,
				page: Number(searchParams.get("page")) || 1,
				includePageCount: true,
			});

		return NextResponse.json({
			data: posts,
			pagination: meta,
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}

export async function POST(req: NextRequest) {
	try {
		const { userId, ...data } = postSchema.parse(await req.json());
		const demoPostCreateArgs: Prisma.demoPostCreateArgs = {
			data: {
				...data,
				user: {
					connect: {
						id: userId,
					},
				},
			},
		};

		if ((await moderate(data)).results.some((m: Moderation) => m.flagged)) {
			throw new ModerationError();
		}

		return NextResponse.json(
			{
				data: await prisma.demoPost.create(demoPostCreateArgs),
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
