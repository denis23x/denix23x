import { NextRequest, NextResponse } from "next/server";
import { handleErr, prisma } from "@/lib/prisma";
import { userSchema } from "@/app/api/v1/placeholder/users/schema";
import { z } from "zod";

type Id = {
	id: string;
};

export async function GET(_: NextRequest, { params }: { params: Promise<Id> }) {
	try {
		return NextResponse.json({
			data: await prisma.demoUser.findUniqueOrThrow({
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
		return NextResponse.json({
			data: await prisma.demoUser.update({
				where: {
					id: z.number().parse(Number((await params).id)),
				},
				data: userSchema.parse(await req.json()),
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
			data: await prisma.demoUser.delete({
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
