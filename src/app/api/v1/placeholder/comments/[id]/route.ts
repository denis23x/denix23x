import { NextRequest, NextResponse } from "next/server";
import { handleErr, prisma } from "@/lib/prisma";
import { commentSchema } from "../schema";
import { z } from "zod";

type Id = {
	id: string;
};

const idSchema = z.object({
	id: z.coerce.number().min(1),
});

export async function GET(_: NextRequest, { params }: { params: Promise<Id> }) {
	try {
		const { id } = idSchema.parse(await params);

		return NextResponse.json({
			data: await prisma.demoComment.findUniqueOrThrow({
				select: {
					id: true,
					message: true,
					rating: true,
					createdAt: true,
					updatedAt: true,
					user: true,
				},
				where: {
					id,
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
		const { id } = idSchema.parse(await params);

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { userId, postId, ...data } = commentSchema.partial().parse(await req.json());

		return NextResponse.json({
			data: await prisma.demoComment.update({
				where: {
					id,
				},
				data,
			}),
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<Id> }) {
	try {
		const { id } = idSchema.parse(await params);

		return NextResponse.json({
			data: await prisma.demoComment.delete({
				where: {
					id,
				},
			}),
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}
