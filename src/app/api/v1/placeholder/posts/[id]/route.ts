import { NextRequest, NextResponse } from "next/server";
import { handleErr, prisma } from "@/lib/prisma";
import { postSchema } from "../schema";
import { z } from "zod";

type Id = {
	id: string;
};

export async function GET(_: NextRequest, { params }: { params: Promise<Id> }) {
	try {
		return NextResponse.json({
			data: await prisma.demoPost.findUniqueOrThrow({
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
				where: {
					id: z.number().parse(Number((await params).id)),
				},
			}),
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}

export async function PUT(req: NextRequest, { params }: { params: Promise<Id> }) {
	try {
		const { userId, ...data } = await req.json();

		return NextResponse.json({
			data: await prisma.demoPost.update({
				where: {
					id: z.number().parse(Number((await params).id)),
				},
				data: {
					...postSchema.parse(data),
					user: {
						connect: {
							id: z.number().parse(Number(userId)),
						},
					},
				},
			}),
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<Id> }) {
	try {
		return NextResponse.json({
			data: await prisma.demoPost.delete({
				where: {
					id: z.number().parse(Number((await params).id)),
				},
			}),
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}