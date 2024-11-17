import { NextRequest, NextResponse } from "next/server";
import { type demoComment, Prisma } from "@prisma/client";
import type { PageNumberPaginationMeta } from "prisma-extension-pagination";
import { handleErr, prisma } from "@/lib/prisma";
import { commentSchema } from "./schema";
import { z } from "zod";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const include: string[] = searchParams.getAll("include");
	const postId: string | null = searchParams.get("postId");
	const userId: string | null = searchParams.get("userId");

	try {
		const demoCommentFindManyArgs: Prisma.demoCommentFindManyArgs = {};

		if (include.length) {
			include.forEach((i: string) => {
				demoCommentFindManyArgs.include = {
					...demoCommentFindManyArgs.include,
					[i]: true,
				};
			});
		}

		if (userId) {
			demoCommentFindManyArgs.where = {
				...demoCommentFindManyArgs.where,
				userId: z.coerce.number().min(1).parse(userId),
			};
		}

		if (postId) {
			demoCommentFindManyArgs.where = {
				...demoCommentFindManyArgs.where,
				postId: z.coerce.number().min(1).parse(postId),
			};
		}

		const [comments, meta]: [demoComment[], PageNumberPaginationMeta] = await prisma.demoComment
			.paginate(demoCommentFindManyArgs)
			.withPages({
				limit: Number(searchParams.get("pageSize")) || 10,
				page: Number(searchParams.get("page")) || 1,
				includePageCount: true,
			});

		return NextResponse.json({
			data: comments,
			pagination: meta,
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}

export async function POST(req: NextRequest) {
	try {
		const { userId, postId, ...data } = commentSchema.parse(await req.json());
		const demoCommentCreateArgs: Prisma.demoCommentCreateArgs = {
			data: {
				...data,
				user: {
					connect: {
						id: userId,
					},
				},
				post: {
					connect: {
						id: postId,
					},
				},
			},
		};

		return NextResponse.json(
			{
				data: await prisma.demoComment.create(demoCommentCreateArgs),
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
