import Pusher from "pusher";
import { NextRequest, NextResponse } from "next/server";
import { handleErr } from "@/lib/server";
import { moderate, ModerationError } from "@/lib/openai";
import type { Moderation } from "openai/resources/moderations";

const pusher: Pusher = new Pusher({
	appId: process.env.PUSHER_ID!,
	key: process.env.PUSHER_KEY!,
	secret: process.env.PUSHER_SECRET!,
	cluster: process.env.PUSHER_CLUSTER!,
	useTLS: true,
});

let dbUsers: Record<string, string>[] = [];
let dbMessages: Record<string, string>[] = [];

export async function GET() {
	return NextResponse.json({
		data: {
			users: dbUsers,
			messages: dbMessages,
		},
		status: 200,
	});
}

export async function POST(req: NextRequest) {
	const { channel, event, ...data } = await req.json();

	try {
		if ((await moderate(data)).results.some((m: Moderation) => m.flagged)) {
			throw new ModerationError();
		}

		if (event === "user:connected") {
			dbUsers.push(data);
		}

		if (event === "user:disconnected") {
			dbUsers = dbUsers.filter(u => u.uid !== data.uid);
		}

		if (event === "message:added") {
			dbMessages.push(data);
		}

		if (event === "message:deleted") {
			dbMessages = dbMessages.filter(m => m.uid !== data.uid);
		}

		return NextResponse.json({
			data: await pusher.trigger(channel, event, data),
			status: 200,
		});
	} catch (error) {
		return NextResponse.json(handleErr(error), handleErr(error));
	}
}

export async function DELETE() {
	dbUsers = [];
	dbMessages = [];

	return NextResponse.json({
		data: {
			users: dbUsers,
			messages: dbMessages,
		},
		status: 200,
	});
}
