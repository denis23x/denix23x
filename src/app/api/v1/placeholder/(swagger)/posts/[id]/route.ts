import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { handleErr } from "@/lib/server";
import { moderate, ModerationError } from "@/lib/openai";
import type { Moderation } from "openai/resources/moderations";
import { postSchema } from "@/app/api/v1/placeholder/_schemas/postsSchema";
import { idSchema } from "@/app/api/v1/placeholder/_schemas/IdSchema";
import type { Id } from "@/app/api/v1/placeholder/_types/id";

export async function GET(req: NextRequest, { params }: { params: Promise<Id> }) {
	try {
		const { id } = idSchema.parse(await params);
		const searchParams: URLSearchParams = req.nextUrl.searchParams;
		const include: string[] = searchParams.getAll("include");
		const demoPostFindUniqueOrThrowArgs: Prisma.demoPostFindUniqueOrThrowArgs = {
			where: {
				id,
			},
		};

		if (include.length) {
			include.forEach((i: string) => {
				demoPostFindUniqueOrThrowArgs.include = {
					...demoPostFindUniqueOrThrowArgs.include,
					[i]: true,
				};
			});
		}

		return NextResponse.json({
			data: await prisma.demoPost.findUniqueOrThrow(demoPostFindUniqueOrThrowArgs),
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}

export async function PUT(req: NextRequest, { params }: { params: Promise<Id> }) {
	try {
		const { id } = idSchema.parse(await params);
		const data = postSchema
			.omit({ userId: true })
			.partial()
			.parse(await req.json());
		const demoPostUpdateArgs: Prisma.demoPostUpdateArgs = {
			where: {
				id,
			},
			data,
		};

		if ((await moderate(data)).results.some((m: Moderation) => m.flagged)) {
			throw new ModerationError();
		}

		return NextResponse.json({
			data: await prisma.demoPost.update(demoPostUpdateArgs),
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<Id> }) {
	try {
		const { id } = idSchema.parse(await params);
		const demoPostDeleteArgs: Prisma.demoPostDeleteArgs = {
			where: {
				id,
			},
		};

		return NextResponse.json({
			data: await prisma.demoPost.delete(demoPostDeleteArgs),
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}
