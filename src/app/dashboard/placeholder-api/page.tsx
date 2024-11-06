import { Separator } from "@/components/ui/separator";
import { readFileAsText } from "@/lib/server";
import PlaceholderRequest from "@/app/dashboard/placeholder-api/components/placeholder-request";

export default async function Page() {
	const books: string = await readFileAsText("/public/files/placeholder-api/books.json");
	const booksModel: string = await readFileAsText("/public/files/placeholder-api/book.ts");
	// const users: string = await readFileAsText("/public/files/placeholder-api/users.json");
	// const usersModel: string = await readFileAsText("/public/files/placeholder-api/user.ts");

	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>Placeholder API</h1>
			<p className={"leading-7"}>
				This tool offers a quick and easy way to mock backend API endpoints, providing developers with predefined,
				free-to-use endpoints for testing and prototyping. Ideal for front-end development and testing workflows, it
				allows you to simulate API responses without needing a live backend.
			</p>
			<Separator />
			<PlaceholderRequest type={"GET"} path={"/api/v1/placeholder/books"} response={books} model={booksModel} />
		</div>
	);
}
