import { NextRequest, NextResponse } from "next/server";
import { Book } from "@/app/api/v1/placeholder/models";
import { booksObject } from "@/app/api/v1/placeholder/db";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const search: string | null = searchParams.get("search");
	const userId: string | null = searchParams.get("userId");
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

	return NextResponse.json({
		data: response,
		status: 200,
	});
}
