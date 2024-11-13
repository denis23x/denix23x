import type { Book } from "../db/books/schema";
import { NextRequest, NextResponse } from "next/server";
import { getBooks } from "../db/repository";
import { pagination } from "@/app/api/v1/placeholder/db/pagination";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const search: string | null = searchParams.get("search");
	const userUid: string | null = searchParams.get("userUid");
	const page: number = Number(searchParams.get("page")) || 1;
	const size: number = Number(searchParams.get("pageSize")) || 10;
	const booksList: Book[] = Object.values(getBooks());

	let response: Book[] = booksList;

	if (search) {
		response = response.filter((b: Book) => {
			return [b.title, b.author].join().toLowerCase().includes(search.toLowerCase());
		});
	}

	if (userUid) {
		response = response.filter((b: Book) => b.userUid === userUid);
	}

	const start: number = (page - 1) * size;
	const end: number = start + size;

	return NextResponse.json({
		data: response.slice(start, end),
		pagination: pagination(response, page, size),
		status: 200,
	});
}
