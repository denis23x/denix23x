import { NextRequest, NextResponse } from "next/server";
import { handleErr, prisma } from "@/lib/prisma";
import { bookSchema } from "../schema";
import { z } from "zod";

type Id = {
	id: string;
};

export async function GET(_: NextRequest, { params }: { params: Promise<Id> }) {
	try {
		return NextResponse.json({
			data: await prisma.demoBook.findUniqueOrThrow({
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
			data: await prisma.demoBook.update({
				where: {
					id: z.number().parse(Number((await params).id)),
				},
				data: {
					...bookSchema.parse(data),
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
			data: await prisma.demoBook.delete({
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
