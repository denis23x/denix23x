import { NextRequest, NextResponse } from "next/server";
import { booksObject, type Book } from "@/app/api/v1/placeholder/db";
import { pagination } from "@/app/api/v1/placeholder/pagination";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const search: string | null = searchParams.get("search");
	const userId: string | null = searchParams.get("userId");
	const page: number = Number(searchParams.get("page")) || 1;
	const size: number = Number(searchParams.get("pageSize")) || 10;
	const booksList: Book[] = Object.values(booksObject);

	let response: Book[] = booksList;

	if (search) {
		response = response.filter((b: Book) => {
			return [b.title, b.author].join().toLowerCase().includes(search.toLowerCase());
		});
	}

	if (userId) {
		response = response.filter((b: Book) => b.userId === Number(userId));
	}

	const start: number = (page - 1) * size;
	const end: number = start + size;

	return NextResponse.json({
		data: response.slice(start, end),
		pagination: pagination(booksList, page, size),
		status: 200,
	});
}
