import { NextRequest, NextResponse } from "next/server";
import { getUsersByUid } from "../../db/repository";

interface Uid {
	uid: string;
}

export async function GET(_: NextRequest, { params }: { params: Promise<Uid> }) {
	const { uid }: Uid = await params;

	return NextResponse.json({
		data: getUsersByUid(uid),
		status: 200,
	});
}

// export async function POST(req: NextRequest) {
// 	const res = await req.json();
//
// 	return NextResponse.json({
// 		data: {
// 			message: "All ok!",
// 		},
// 		status: 200,
// 	});
// }
//
// export async function PUT(req: NextRequest) {
// 	const res = await req.json();
//
// 	return NextResponse.json({
// 		data: {
// 			message: "All ok!",
// 		},
// 		status: 200,
// 	});
// }
