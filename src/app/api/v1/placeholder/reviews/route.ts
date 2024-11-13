import { NextRequest, NextResponse } from "next/server";
import { reviewsObject, type Review } from "@/app/api/v1/placeholder/db";
import { pagination } from "@/app/api/v1/placeholder/pagination";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const bookId: string | null = searchParams.get("bookId");
	const userId: string | null = searchParams.get("userId");
	const page: number = Number(searchParams.get("page")) || 1;
	const size: number = Number(searchParams.get("pageSize")) || 10;
	const commentsList: Review[] = Object.values(reviewsObject);

	let response: Review[] = commentsList;

	if (bookId) {
		response = response.filter((r: Review) => r.bookId === Number(bookId));
	}

	if (userId) {
		response = response.filter((r: Review) => r.userId === Number(userId));
	}

	const start: number = (page - 1) * size;
	const end: number = start + size;

	return NextResponse.json({
		data: response.slice(start, end),
		pagination: pagination(commentsList, page, size),
		status: 200,
	});
}
