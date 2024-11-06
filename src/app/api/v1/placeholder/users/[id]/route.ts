import { NextRequest, NextResponse } from "next/server";
import { usersObject } from "@/app/api/v1/placeholder/db";

interface Id {
	id: string;
}

export async function GET(_: NextRequest, { params }: { params: Promise<Id> }) {
	const { id }: Id = await params;

	return NextResponse.json({
		data: usersObject[id],
		status: 200,
	});
}
