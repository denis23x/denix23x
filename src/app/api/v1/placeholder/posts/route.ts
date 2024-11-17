import { NextRequest, NextResponse } from "next/server";
import { Prisma, type demoPost } from "@prisma/client";
import type { PageNumberPaginationMeta } from "prisma-extension-pagination";
import { handleErr, prisma } from "@/lib/prisma";
import { postSchema } from "./schema";
import { z } from "zod";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const search: string | null = searchParams.get("search");
	const userId: string | null = searchParams.get("userId");

	try {
		const demoPostArgs: Prisma.demoPostFindManyArgs = {
			select: {
				id: true,
				title: true,
				description: true,
				cover: true,
				tags: true,
				createdAt: true,
				updatedAt: true,
				user: true,
			},
		};

		if (search) {
			demoPostArgs.where = {
				...demoPostArgs.where,
				title: {
					contains: search,
					mode: "insensitive",
				},
			};
		}

		if (userId) {
			demoPostArgs.where = {
				...demoPostArgs.where,
				userId: z.number().parse(Number(userId)),
			};
		}

		const [posts, meta]: [demoPost[], PageNumberPaginationMeta] = await prisma.demoPost
			.paginate(demoPostArgs)
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
		const { userId, ...data } = await req.json();

		return NextResponse.json({
			data: await prisma.demoPost.create({
				data: {
					...postSchema.parse(data),
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
