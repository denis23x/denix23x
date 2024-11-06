import { Separator } from "@/components/ui/separator";
import { AppHighlight } from "@/components/app-highlight";
import { readFileAsText } from "@/lib/server";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function Page() {
	const books: string = await readFileAsText("/public/files/placeholder-api/books.json");
	const booksModel: string = await readFileAsText("/public/files/placeholder-api/book.ts");
	const users: string = await readFileAsText("/public/files/placeholder-api/users.json");
	const usersModel: string = await readFileAsText("/public/files/placeholder-api/user.ts");

	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>Placeholder API</h1>
			<p className={"leading-7"}>
				This tool offers a quick and easy way to mock backend API endpoints, providing developers with predefined,
				free-to-use endpoints for testing and prototyping. Ideal for front-end development and testing workflows, it
				allows you to simulate API responses without needing a live backend.
			</p>
			<Separator />
			<Collapsible
				className={"bg-[rgba(97,175,254,.1)] border border-[#61affe] dark:border-[#61affe]/50 w-full rounded-md p-1"}
				open={true}
			>
				<CollapsibleTrigger className={"w-full"}>
					<div className={"flex items-center justify-between w-full gap-4"}>
						<small className="font-bold uppercase bg-[#61affe] dark:bg-[#61affe]/50 text-foreground rounded py-1 w-16">
							GET
						</small>
						<span className="font-mono text-foreground text-left flex-1 truncate">
							http://localhost:3000/api/v1/placeholder/books
						</span>
						<div className={"px-1"}>
							<ChevronDown />
						</div>
					</div>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<div className={"grid gap-4"}>
						<Link href={"/api/v1/placeholder/books"} target={"_blank"}>
							<Button variant={"outline"}>Try it out</Button>
						</Link>
						<Tabs defaultValue="example">
							<TabsList>
								<TabsTrigger value="example">Example Value</TabsTrigger>
								<TabsTrigger value="model">Model</TabsTrigger>
							</TabsList>
							<TabsContent value="example">
								<AppHighlight title={"books.json"} language={"json"} code={books}></AppHighlight>
							</TabsContent>
							<TabsContent value="model">
								<AppHighlight title={"books.ts"} language={"typescript"} code={booksModel}></AppHighlight>
							</TabsContent>
						</Tabs>
					</div>
				</CollapsibleContent>
			</Collapsible>
			<Collapsible
				className={"bg-[rgba(97,175,254,.1)] border border-[#61affe] dark:border-[#61affe]/50 w-full rounded-md p-1"}
			>
				<CollapsibleTrigger className={"w-full"}>
					<div className={"flex items-center justify-between w-full gap-4"}>
						<small className="font-bold uppercase bg-[#61affe] dark:bg-[#61affe]/50 text-foreground rounded py-1 w-16">
							GET
						</small>
						<span className="font-mono text-foreground text-left flex-1 truncate">
							http://localhost:3000/api/v1/placeholder/books/{`{id}`}
						</span>
						<div className={"px-1"}>
							<ChevronDown />
						</div>
					</div>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<div className={"grid gap-4"}>
						<Link href={"/api/v1/placeholder/books/1"} target={"_blank"}>
							<Button variant={"outline"}>Try it out</Button>
						</Link>
						<Tabs defaultValue="example">
							<TabsList>
								<TabsTrigger value="example">Example Value</TabsTrigger>
								<TabsTrigger value="model">Model</TabsTrigger>
							</TabsList>
							<TabsContent value="example">
								<AppHighlight language={"json"} code={users}></AppHighlight>
							</TabsContent>
							<TabsContent value="model">
								<AppHighlight language={"typescript"} code={usersModel}></AppHighlight>
							</TabsContent>
						</Tabs>
					</div>
				</CollapsibleContent>
			</Collapsible>
			{/*
			<Collapsible
				className={"bg-[rgba(73,204,144,.1)] border border-[#49cc90] dark:border-[#49cc90]/50 w-full rounded-md p-1"}
			>
				<CollapsibleTrigger className={"w-full"}>
					<div className={"flex items-center justify-between w-full gap-4"}>
						<small className="font-bold uppercase bg-[#49cc90] dark:bg-[#49cc90]/50 text-foreground rounded py-1 w-16">
							POST
						</small>
						<span className="font-mono text-foreground text-left flex-1 truncate">
							http://localhost:3000/dashboard/placeholder-api
						</span>
						<div className={"px-1"}>
							<ChevronDown />
						</div>
					</div>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<div className={"flex"}>Yes. Free to use for personal and commercial projects. No attribution required.</div>
				</CollapsibleContent>
			</Collapsible>
			*/}
		</div>
	);
}
