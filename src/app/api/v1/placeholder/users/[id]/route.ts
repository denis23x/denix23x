import type { demoUser } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Id {
	id: string;
}

export async function GET(_: NextRequest, { params }: { params: Promise<Id> }) {
	const { id }: Id = await params;

	const user: demoUser | null = await prisma.demoUser.findUnique({
		where: {
			id: Number(id),
		},
	});

	return NextResponse.json({
		data: user,
		status: 200,
	});
}

// TODO: crud
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
