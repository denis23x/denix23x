import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
	const requestHeaders: Headers = new Headers(req.headers);

	requestHeaders.set("x-pathname", req.nextUrl.pathname);
	requestHeaders.set("x-href", req.nextUrl.href);
	requestHeaders.set("x-origin", req.nextUrl.origin);

	return NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});
}
