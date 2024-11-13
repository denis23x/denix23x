import type { Review } from "../db/reviews/schema";
import { NextRequest, NextResponse } from "next/server";
import { getReviews } from "../db/repository";
import { pagination } from "@/app/api/v1/placeholder/db/pagination";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const bookUid: string | null = searchParams.get("bookUid");
	const userUid: string | null = searchParams.get("userUid");
	const page: number = Number(searchParams.get("page")) || 1;
	const size: number = Number(searchParams.get("pageSize")) || 10;
	const commentsList: Review[] = Object.values(getReviews());

	let response: Review[] = commentsList;

	if (bookUid) {
		response = response.filter((r: Review) => r.bookUid === bookUid);
	}

	if (userUid) {
		response = response.filter((r: Review) => r.userUid === userUid);
	}

	const start: number = (page - 1) * size;
	const end: number = start + size;

	return NextResponse.json({
		data: response.slice(start, end),
		pagination: pagination(response, page, size),
		status: 200,
	});
}
