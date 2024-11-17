import { NextRequest, NextResponse } from "next/server";
import { handleErr, prisma } from "@/lib/prisma";
import { commentSchema } from "../schema";
import { z } from "zod";

type Id = {
	id: string;
};

export async function GET(_: NextRequest, { params }: { params: Promise<Id> }) {
	try {
		return NextResponse.json({
			select: {
				id: true,
				message: true,
				rating: true,
				createdAt: true,
				updatedAt: true,
				user: true,
			},
			data: await prisma.demoComment.findUniqueOrThrow({
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
		const { userId, postId, ...data } = await req.json();

		return NextResponse.json({
			data: await prisma.demoComment.update({
				where: {
					id: z.number().parse(Number((await params).id)),
				},
				data: {
					...commentSchema.parse(data),
					user: {
						connect: {
							id: z.number().parse(Number(userId)),
						},
					},
					post: {
						connect: {
							id: z.number().parse(Number(postId)),
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
			data: await prisma.demoComment.delete({
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
