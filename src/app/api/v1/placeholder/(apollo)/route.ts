import { NextRequest } from "next/server";
import { apolloServerHandler } from "./apollo/_server/server";

export async function GET(req: NextRequest) {
	return apolloServerHandler(req);
}

export async function POST(req: NextRequest) {
	return apolloServerHandler(req);
}
