import { NextRequest, NextResponse } from "next/server";
import { handleErr, prisma } from "@/lib/prisma";
import { reviewSchema } from "../schema";
import { z } from "zod";

type Id = {
	id: string;
};

export async function GET(_: NextRequest, { params }: { params: Promise<Id> }) {
	try {
		return NextResponse.json({
			data: await prisma.demoReview.findUniqueOrThrow({
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
		const { userId, bookId, ...data } = await req.json();

		return NextResponse.json({
			data: await prisma.demoReview.update({
				where: {
					id: z.number().parse(Number((await params).id)),
				},
				data: {
					...reviewSchema.parse(data),
					user: {
						connect: {
							id: z.number().parse(Number(userId)),
						},
					},
					book: {
						connect: {
							id: z.number().parse(Number(bookId)),
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
			data: await prisma.demoReview.delete({
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
