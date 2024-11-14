import type { demoReview } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Id {
	id: string;
}

export async function GET(_: NextRequest, { params }: { params: Promise<Id> }) {
	const { id }: Id = await params;

	const review: demoReview | null = await prisma.demoReview.findUnique({
		where: {
			id: Number(id),
		},
	});

	return NextResponse.json({
		data: review,
		status: 200,
	});
}
