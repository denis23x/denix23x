import { NextRequest, NextResponse } from "next/server";
import { getBooksByUid } from "../../db/repository";

interface Uid {
	uid: string;
}

export async function GET(_: NextRequest, { params }: { params: Promise<Uid> }) {
	const { uid }: Uid = await params;

	return NextResponse.json({
		data: getBooksByUid(uid),
		status: 200,
	});
}
