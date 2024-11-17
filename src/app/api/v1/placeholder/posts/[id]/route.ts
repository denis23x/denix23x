import { NextRequest, NextResponse } from "next/server";
import { handleErr, prisma } from "@/lib/prisma";
import { postSchema } from "../schema";
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
		const { userId, ...data } = postSchema.partial().parse(await req.json());

		return NextResponse.json({
			data: await prisma.demoPost.update({
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
			data: await prisma.demoPost.delete({
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
