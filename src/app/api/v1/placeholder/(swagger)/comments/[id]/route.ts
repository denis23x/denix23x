import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { handleErr } from "@/lib/server";
import { moderate, ModerationError } from "@/lib/openai";
import type { Moderation } from "openai/resources/moderations";
import { commentSchema } from "@/app/api/v1/placeholder/_schemas/commentSchema";

type Id = {
	id: string;
};

const idSchema = z.object({
	id: z.coerce.number().min(1),
});

export async function GET(req: NextRequest, { params }: { params: Promise<Id> }) {
	try {
		const { id } = idSchema.parse(await params);
		const searchParams: URLSearchParams = req.nextUrl.searchParams;
		const include: string[] = searchParams.getAll("include");
		const demoCommentFindUniqueOrThrowArgs: Prisma.demoCommentFindUniqueOrThrowArgs = {
			where: {
				id,
			},
		};

		if (include.length) {
			include.forEach((i: string) => {
				demoCommentFindUniqueOrThrowArgs.include = {
					...demoCommentFindUniqueOrThrowArgs.include,
					[i]: true,
				};
			});
		}

		return NextResponse.json({
			data: await prisma.demoComment.findUniqueOrThrow(demoCommentFindUniqueOrThrowArgs),
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}

export async function PUT(req: NextRequest, { params }: { params: Promise<Id> }) {
	try {
		const { id } = idSchema.parse(await params);
		const data = commentSchema
			.omit({ userId: true, postId: true })
			.partial()
			.parse(await req.json());
		const demoCommentUpdateArgs: Prisma.demoCommentUpdateArgs = {
			where: {
				id,
			},
			data,
		};

		if ((await moderate(data)).results.some((m: Moderation) => m.flagged)) {
			throw new ModerationError();
		}

		return NextResponse.json({
			data: await prisma.demoComment.update(demoCommentUpdateArgs),
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<Id> }) {
	try {
		const { id } = idSchema.parse(await params);
		const demoCommentDeleteArgs: Prisma.demoCommentDeleteArgs = {
			where: {
				id,
			},
		};

		return NextResponse.json({
			data: await prisma.demoComment.delete(demoCommentDeleteArgs),
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}
