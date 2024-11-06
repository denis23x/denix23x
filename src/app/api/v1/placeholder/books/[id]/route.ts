import { NextRequest, NextResponse } from "next/server";
import { booksObject } from "@/app/api/v1/placeholder/db";

interface Id {
	id: string;
}

export async function GET(_: NextRequest, { params }: { params: Promise<Id> }) {
	const { id }: Id = await params;

	return NextResponse.json({
		data: booksObject[id],
		status: 200,
	});
}
