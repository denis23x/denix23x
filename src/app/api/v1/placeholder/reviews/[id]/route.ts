import { NextRequest, NextResponse } from "next/server";
import { getReviewsByUid } from "../../db/repository";

interface Uid {
	uid: string;
}

export async function GET(_: NextRequest, { params }: { params: Promise<Uid> }) {
	const { uid }: Uid = await params;

	return NextResponse.json({
		data: getReviewsByUid(uid),
		status: 200,
	});
}