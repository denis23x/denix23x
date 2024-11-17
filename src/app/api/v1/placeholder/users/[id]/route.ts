import { NextRequest, NextResponse } from "next/server";
import { handleErr, prisma } from "@/lib/prisma";
import { userSchema } from "@/app/api/v1/placeholder/users/schema";
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
			data: await prisma.demoUser.findUniqueOrThrow({
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
		const { ...data } = userSchema.partial().parse(await req.json());

		return NextResponse.json({
			data: await prisma.demoUser.update({
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
			data: await prisma.demoUser.delete({
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
