import { Separator } from "@/components/ui/separator";
import { readFileAsText } from "@/lib/server";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { navMainPlaceholderApi } from "@/app/store/useNavMain";
import PlaceholderRequest, { PlaceholderRequestParameters } from "./components/placeholder-request";

export const metadata: Metadata = {
	title: navMainPlaceholderApi.title,
	description: navMainPlaceholderApi.description,
};

export default async function Page() {
	const booksModel: string = await readFileAsText("/public/dashboard/tools/placeholder-api/book.ts");
	const booksResponse: string = await readFileAsText("/public/dashboard/tools/placeholder-api/books.json");
	const booksParameters: PlaceholderRequestParameters[] = [
		{
			name: "search",
			description: "Search by title and author",
			key: "search",
			type: "string",
			partOf: "query",
		},
		{
			name: "userId",
			description: "Filter by userId",
			key: "userId",
			type: "number",
			partOf: "query",
		},
		{
			name: "page",
			description: "Page",
			key: "page",
			type: "number",
			partOf: "query",
		},
		{
			name: "pageSize",
			description: "Page size",
			key: "pageSize",
			type: "number",
			partOf: "query",
		},
	];
	const booksParametersId: PlaceholderRequestParameters[] = [
		{
			name: "bookId",
			description: "Get book by id",
			key: "bookId",
			type: "number",
			partOf: "path",
			required: true,
		},
	];

	const usersModel: string = await readFileAsText("/public/dashboard/tools/placeholder-api/user.ts");
	const usersResponse: string = await readFileAsText("/public/dashboard/tools/placeholder-api/users.json");
	const usersParameters: PlaceholderRequestParameters[] = [
		{
			name: "search",
			description: "Search by firstName and lastName",
			key: "search",
			type: "string",
			partOf: "query",
		},
		{
			name: "page",
			description: "Page",
			key: "page",
			type: "number",
			partOf: "query",
		},
		{
			name: "pageSize",
			description: "Page size",
			key: "pageSize",
			type: "number",
			partOf: "query",
		},
	];
	const usersParametersId: PlaceholderRequestParameters[] = [
		{
			name: "userId",
			description: "Get user by id",
			key: "userId",
			type: "number",
			partOf: "path",
			required: true,
		},
	];

	const reviewsModel: string = await readFileAsText("/public/dashboard/tools/placeholder-api/review.ts");
	const reviewsResponse: string = await readFileAsText("/public/dashboard/tools/placeholder-api/reviews.json");
	const reviewsParameters: PlaceholderRequestParameters[] = [
		{
			name: "bookId",
			description: "Filter by bookId",
			key: "bookId",
			type: "string",
			partOf: "query",
		},
		{
			name: "userId",
			description: "Filter by userId",
			key: "userId",
			type: "string",
			partOf: "query",
		},
		{
			name: "page",
			description: "Page",
			key: "page",
			type: "number",
			partOf: "query",
		},
		{
			name: "pageSize",
			description: "Page size",
			key: "pageSize",
			type: "number",
			partOf: "query",
		},
	];
	const reviewsParametersId: PlaceholderRequestParameters[] = [
		{
			name: "reviewId",
			description: "Get review by id",
			key: "reviewId",
			type: "number",
			partOf: "path",
			required: true,
		},
	];

	const singleResponse = (response: string): string => {
		const original = JSON.parse(response);

		return JSON.stringify(
			{
				data: original.data[0],
				status: 200,
			},
			null,
			2
		);
	};

	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Placeholder API</h1>
			<p className={"leading-7"}>
				This tool offers a quick and easy way to mock backend <strong>API</strong> endpoints, providing developers with
				predefined, free-to-use endpoints for testing and prototyping. Ideal for front-end development and testing
				workflows, it allows you to simulate <strong>API</strong> responses without needing a live backend.
			</p>
			<Separator />
			<Collapsible className={"group/collapsible-top"} defaultOpen={true}>
				<CollapsibleTrigger
					className={"flex items-center justify-between gap-4 border-b border-input hover:bg-sidebar w-full p-1"}
				>
					<div className={"flex items-center gap-2"}>
						<span className={"text-2xl font-semibold tracking-tight"}>Books</span>
						<span className={"text-sm text-muted-foreground"}>Everything about books</span>
					</div>
					<ChevronDown className={"group-data-[state=open]/collapsible-top:rotate-180"} />
				</CollapsibleTrigger>
				<CollapsibleContent className={"grid gap-4 pt-2"}>
					<PlaceholderRequest
						type={"GET"}
						path={"/api/v1/placeholder/books"}
						response={booksResponse}
						model={booksModel}
						parameters={booksParameters}
					/>
					<PlaceholderRequest
						type={"GET"}
						path={"/api/v1/placeholder/books/{id}"}
						response={singleResponse(booksResponse)}
						model={booksModel}
						parameters={booksParametersId}
					/>
				</CollapsibleContent>
			</Collapsible>
			<Collapsible className={"group/collapsible-top"} defaultOpen={true}>
				<CollapsibleTrigger
					className={"flex items-center justify-between gap-4 border-b border-input hover:bg-sidebar w-full p-1"}
				>
					<div className={"flex items-center gap-2"}>
						<span className={"text-2xl font-semibold tracking-tight"}>Reviews</span>
						<span className={"text-sm text-muted-foreground"}>Everything about reviews</span>
					</div>
					<ChevronDown className={"group-data-[state=open]/collapsible-top:rotate-180"} />
				</CollapsibleTrigger>
				<CollapsibleContent className={"grid gap-4 pt-2"}>
					<PlaceholderRequest
						type={"GET"}
						path={"/api/v1/placeholder/reviews"}
						response={reviewsResponse}
						model={reviewsModel}
						parameters={reviewsParameters}
					/>
					<PlaceholderRequest
						type={"GET"}
						path={"/api/v1/placeholder/reviews/{id}"}
						response={singleResponse(reviewsResponse)}
						model={reviewsModel}
						parameters={reviewsParametersId}
					/>
				</CollapsibleContent>
			</Collapsible>
			<Collapsible className={"group/collapsible-top"} defaultOpen={true}>
				<CollapsibleTrigger
					className={"flex items-center justify-between gap-4 border-b border-input hover:bg-sidebar w-full p-1"}
				>
					<div className={"flex items-center gap-2"}>
						<span className={"text-2xl font-semibold tracking-tight"}>Users</span>
						<span className={"text-sm text-muted-foreground"}>Everything about users</span>
					</div>
					<ChevronDown className={"group-data-[state=open]/collapsible-top:rotate-180"} />
				</CollapsibleTrigger>
				<CollapsibleContent className={"grid gap-4 pt-2"}>
					<PlaceholderRequest
						type={"GET"}
						path={"/api/v1/placeholder/users"}
						response={usersResponse}
						model={usersModel}
						parameters={usersParameters}
					/>
					<PlaceholderRequest
						type={"GET"}
						path={"/api/v1/placeholder/users/{id}"}
						response={singleResponse(usersResponse)}
						model={usersModel}
						parameters={usersParametersId}
					/>
				</CollapsibleContent>
			</Collapsible>
		</div>
	);
}
