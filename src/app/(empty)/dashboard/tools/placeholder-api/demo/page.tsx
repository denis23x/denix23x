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
import { headers } from "next/headers";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

export const metadata: Metadata = {
	title: "Placeholder API",
	description:
		"Lorem Ipsum Demo: A mock API for testing, prototyping, and showcasing. Access users, posts, and reviews with sample data—perfect for developers and designers.",
};

type Params = {
	page: string;
	pageSize: string;
};

export default async function Page({ searchParams }: { searchParams: Promise<Params> }) {
	const headersList: ReadonlyHeaders = await headers();
	const host: string | null = headersList.get("x-origin");
	const { page, pageSize = "9" }: { page: string; pageSize: string } = await searchParams;
	const response: Response = await fetch(`${host}/api/v1/placeholder/books?page=${page}&pageSize=${pageSize}`);
	const { data: books, pagination }: { data: Book[]; pagination: PaginationType } = await response.json();
	const pages: number[] = Array.from({ length: pagination.pageCount }, (_, i) => i + 1);

	return (
		<div className={"block"}>
			<ul className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
				{books.map((book: Book) => (
					<li className={"col-span-1 rounded-xl overflow-hidden border border-input"} key={book.id}>
						<div className={"grid gap-4 bg-background size-full p-4"}>
							<Link className={""} href={`./demo/posts/${book.id}`}>
								{book.cover ? (
									<figure className={"flex flex-col gap-4"}>
										<Image
											className={"size-full rounded-xl"}
											width={512}
											height={512}
											src={book.cover}
											alt={book.title}
										/>
									</figure>
								) : (
									<div className={"flex flex-col items-start justify-between gap-4"}>
										<strong className={"line-clamp-1 text-2xl"}>{book.title}</strong>
										<Badge>{book.genre}</Badge>
										<p className={"line-clamp-6"}>{book.description}</p>
									</div>
								)}
							</Link>
							<Link className={"mt-auto w-full grid gap-4"} href={`./demo/users/${book.user?.id}`}>
								{!book.cover && <Separator />}
								<div className={"flex items-center gap-4"}>
									{book.user?.avatar && (
										<figure className={"rounded-full overflow-hidden size-12"}>
											<Image
												className={"size-full aspect-square object-cover object-center"}
												width={48}
												height={48}
												src={book.user?.avatar}
												alt={book.user?.name}
											/>
										</figure>
									)}
									<div className={"flex flex-col items-stretch flex-1"}>
										<span className={"font-semibold tracking-tight"}>{book.user?.name}</span>
										<p className={"leading-7 line-clamp-1"}>{book.user?.bio}</p>
									</div>
								</div>
							</Link>
						</div>
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
