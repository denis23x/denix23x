import type { User } from "../db/users/schema";
import { NextRequest, NextResponse } from "next/server";
import { getUsers } from "../db/repository";
import { pagination } from "@/app/api/v1/placeholder/db/pagination";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const search: string | null = searchParams.get("search");
	const page: number = Number(searchParams.get("page")) || 1;
	const size: number = Number(searchParams.get("pageSize")) || 10;
	const usersList: User[] = Object.values(getUsers());

	let response: User[] = usersList;

	if (search) {
		response = response.filter((u: User) => {
			return [u.firstName, u.lastName].join().toLowerCase().includes(search.toLowerCase());
		});
	}

	const start: number = (page - 1) * size;
	const end: number = start + size;

	return NextResponse.json({
		data: response.slice(start, end),
		pagination: pagination(response, page, size),
		status: 200,
	});
}
