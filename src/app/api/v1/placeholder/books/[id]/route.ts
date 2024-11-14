import type { demoBook } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Id {
	id: string;
}

export async function GET(_: NextRequest, { params }: { params: Promise<Id> }) {
	const { id }: Id = await params;

	const book: demoBook | null = await prisma.demoBook.findUnique({
		where: {
			id: Number(id),
		},
	});

	return NextResponse.json({
		data: book,
		status: 200,
	});
}
