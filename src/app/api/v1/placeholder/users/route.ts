import { NextRequest, NextResponse } from "next/server";
import { User } from "@/app/api/v1/placeholder/models";
import { usersObject } from "@/app/api/v1/placeholder/db";

export async function GET(req: NextRequest) {
	const searchParams: URLSearchParams = req.nextUrl.searchParams;
	const search: string | null = searchParams.get("search");
	const usersList: User[] = Object.values(usersObject);

	let response: User[] = usersList;

	if (search) {
		response = response.filter((u: User) => {
			return [u.firstName, u.lastName].join().toLowerCase().includes(search.toLowerCase());
		});
	}

	return NextResponse.json({
		data: response,
		status: 200,
	});
}
