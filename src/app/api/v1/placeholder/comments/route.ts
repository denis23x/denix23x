import { NextRequest, NextResponse } from "next/server";
import { type demoComment, Prisma } from "@prisma/client";
import type { PageNumberPaginationMeta } from "prisma-extension-pagination";
import { handleErr, prisma } from "@/lib/prisma";
import { commentSchema } from "./schema";
import { z } from "zod";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const postId: string | null = searchParams.get("postId");
	const userId: string | null = searchParams.get("userId");

	try {
		const demoCommentArgs: Prisma.demoCommentFindManyArgs = {
			select: {
				id: true,
				message: true,
				rating: true,
				createdAt: true,
				updatedAt: true,
				user: true,
			},
		};

		if (userId) {
			demoCommentArgs.where = {
				...demoCommentArgs.where,
				userId: z.number().parse(Number(userId)),
			};
		}

		if (postId) {
			demoCommentArgs.where = {
				...demoCommentArgs.where,
				postId: z.number().parse(Number(postId)),
			};
		}

		const [comments, meta]: [demoComment[], PageNumberPaginationMeta] = await prisma.demoComment
			.paginate(demoCommentArgs)
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

		return NextResponse.json(
			{
				data: await prisma.demoComment.create({
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
				}),
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
