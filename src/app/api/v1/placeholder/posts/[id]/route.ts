import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { postSchema } from "../schema";
import { z } from "zod";
import { handleErr } from "@/lib/server";
import { moderate, ModerationError } from "@/lib/openai";
import type { Moderation } from "openai/resources/moderations";

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
