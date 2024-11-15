import { Metadata } from "next";
import { Book } from "./types/book";
import { Pagination as PaginationType } from "./types/pagination";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User as UserType } from "@/app/demo/rest-api/test/types/user";

export const metadata: Metadata = {
	title: "Lorem Ipsum Demo",
	description: "Lorem Ipsum Demo",
};

type Params = {
	page: string;
	pageSize: string;
};

export default async function Page({ searchParams }: { searchParams: Promise<Params> }) {
	const host: string = "http://localhost:3000";
	const { page, pageSize = "9" }: { page: string; pageSize: string } = await searchParams;
	const response: Response = await fetch(`${host}/api/v1/placeholder/books?page=${page}&pageSize=${pageSize}`);
	const { data: books, pagination }: { data: Book[]; pagination: PaginationType } = await response.json();
	const pages: number[] = Array.from({ length: pagination.pageCount }, (_, i) => i + 1);

	return (
		<div className={"grid gap-4 md:gap-12 w-full max-w-4xl mx-auto py-4 md:py-12 px-4 text-foreground"}>
			<h1 className={"text-4xl font-extrabold tracking-tight md:text-5xl"}>Lorem Ipsum Showcase</h1>
			<ul className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
				{books.map((book: Book) => (
					<li className={"col-span-1 rounded-xl border border-input overflow-hidden"} key={book.id}>
						<Link className={"grid bg-background hover:bg-sidebar size-full p-4"} href={`./test/${book.id}`}>
							{book.cover ? (
								<figure className={"flex flex-col gap-4"}>
									<Image
										className={"size-full rounded-xl"}
										width={512}
										height={512}
										src={book.cover}
										alt={book.title}
									/>
									{book.user && (
										<div className={"mt-auto"}>
											<User user={book.user} />
										</div>
									)}
								</figure>
							) : (
								<div className={"flex flex-col items-start justify-between gap-4"}>
									<strong className={"line-clamp-1 text-2xl"}>{book.title}</strong>
									<Badge>{book.genre}</Badge>
									<p className={"line-clamp-5"}>{book.description}</p>
									{book.user && (
										<div className={"mt-auto w-full grid gap-4"}>
											<Separator />
											<User user={book.user} />
										</div>
									)}
								</div>
							)}
						</Link>
					</li>
				))}
			</ul>
			<Pagination>
				<PaginationContent>
					<PaginationItem className={"hidden md:block"}>
						<PaginationPrevious href={!pagination.isFirstPage ? `?page=${pagination.currentPage - 1}` : "#"} />
					</PaginationItem>
					{pages.map(page =>
						Math.abs(page - pagination.currentPage) > 2 && page !== 1 && page !== pagination.pageCount ? (
							page === pagination.currentPage + 3 || page === pagination.currentPage - 3 ? (
								<PaginationItem key={`ellipsis-${page}`}>
									<PaginationEllipsis />
								</PaginationItem>
							) : null
						) : (
							<PaginationItem key={page}>
								<PaginationLink href={`?page=${page}`} isActive={page === pagination.currentPage}>
									{page}
								</PaginationLink>
							</PaginationItem>
						)
					)}
					<PaginationItem className={"hidden md:block"}>
						<PaginationNext href={!pagination.isLastPage ? `?page=${pagination.currentPage + 1}` : "#"} />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
}

function User({ user }: { user: UserType }) {
	return (
		<div className={"flex items-center gap-4"}>
			<figure className={"rounded-lg overflow-hidden size-12"}>
				<img
					className={"size-full aspect-square object-cover object-center"}
					width={48}
					height={48}
					loading={"lazy"}
					src={`https://api.dicebear.com/9.x/fun-emoji/svg?size=48&seed=${user.name}`}
					alt={user.name}
				/>
			</figure>
			<div className={"flex flex-col items-stretch flex-1"}>
				<span className={"font-semibold tracking-tight"}>{user.name}</span>
				<span className={"leading-7 line-clamp-1"}>{user.bio}</span>
			</div>
		</div>
	);
}
