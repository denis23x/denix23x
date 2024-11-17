import { NextRequest, NextResponse } from "next/server";
import { handleErr, prisma } from "@/lib/prisma";
import { userSchema } from "@/app/api/v1/placeholder/users/schema";
import { z } from "zod";
import { Prisma } from "@prisma/client";

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
		const demoUserFindUniqueOrThrowArgs: Prisma.demoUserFindUniqueOrThrowArgs = {
			where: {
				id,
			},
		};

		if (include.length) {
			include.forEach((i: string) => {
				demoUserFindUniqueOrThrowArgs.include = {
					...demoUserFindUniqueOrThrowArgs.include,
					[i]: true,
				};
			});
		}

		return NextResponse.json({
			data: await prisma.demoUser.findUniqueOrThrow(demoUserFindUniqueOrThrowArgs),
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}

export async function PUT(req: NextRequest, { params }: { params: Promise<Id> }) {
	try {
		const { id } = idSchema.parse(await params);
		const data = userSchema.partial().parse(await req.json());
		const demoUserUpdateArgs: Prisma.demoUserUpdateArgs = {
			where: {
				id,
			},
			data,
		};

		return NextResponse.json({
			data: await prisma.demoUser.update(demoUserUpdateArgs),
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<Id> }) {
	try {
		const { id } = idSchema.parse(await params);
		const demoUserDeleteArgs: Prisma.demoUserDeleteArgs = {
			where: {
				id,
			},
		};

		return NextResponse.json({
			data: await prisma.demoUser.delete(demoUserDeleteArgs),
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}
