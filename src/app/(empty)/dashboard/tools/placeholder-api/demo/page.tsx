import type { demoPost, demoUser } from "@prisma/client";
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

type Params = {
	page: string;
	pageSize: string;
};

type PaginationT = {
	isFirstPage: boolean;
	isLastPage: boolean;
	currentPage: number;
	previousPage: number | null;
	nextPage: number | null;
	pageCount: number;
	totalCount: number;
};

interface demoPostWU<U> extends demoPost {
	user: U;
}

export default async function Page({ searchParams }: { searchParams: Promise<Params> }) {
	const headersList: ReadonlyHeaders = await headers();
	const host: string | null = headersList.get("x-origin");
	const { page = "1", pageSize: size = "9" }: { page: string; pageSize: string } = await searchParams;
	const response: Response = await fetch(`${host}/api/v1/placeholder/posts?include=user&page=${page}&pageSize=${size}`);
	const { data: posts, pagination }: { data: demoPostWU<demoUser>[]; pagination: PaginationT } = await response.json();
	const pages: number[] = Array.from({ length: pagination.pageCount }, (_, i) => i + 1);

	return (
		<div className={"grid gap-4 md:gap-12"}>
			<ul className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
				{posts.map((post: demoPostWU<demoUser>) => (
					<li className={"col-span-1 rounded-xl overflow-hidden border border-input"} key={post.id}>
						<div className={"grid gap-4 bg-background size-full p-4"}>
							<Link className={""} href={`./demo/posts/${post.id}`}>
								{post.cover ? (
									<figure className={"flex flex-col gap-4"}>
										<Image
											className={"size-full rounded-xl"}
											width={512}
											height={512}
											src={post.cover}
											alt={post.title}
										/>
									</figure>
								) : (
									<div className={"flex flex-col items-start justify-between gap-4"}>
										<strong className={"first-letter:uppercase"}>
											<span className={"line-clamp-1 text-2xl"}>{post.title}</span>
										</strong>
										{post.tags.length && (
											<div className={"flex flex-wrap gap-2"}>
												{post.tags.slice(0, 3).map((tag: string, i) => (
													<Badge key={i}>{tag}</Badge>
												))}
											</div>
										)}
										<p className={"line-clamp-6"}>{post.description}</p>
									</div>
								)}
							</Link>
							<Link className={"mt-auto w-full grid gap-4"} href={`./demo/users/${post.user?.id}`}>
								{!post.cover && <Separator />}
								<div className={"flex items-center gap-4"}>
									{post.user?.avatar && (
										<figure className={"rounded-full overflow-hidden size-12"}>
											<Image
												className={"size-full aspect-square object-cover object-center"}
												width={48}
												height={48}
												src={post.user?.avatar}
												alt={post.user?.name}
											/>
										</figure>
									)}
									<div className={"flex flex-col items-stretch flex-1"}>
										<span className={"font-semibold tracking-tight"}>{post.user?.name}</span>
										<p className={"leading-7 line-clamp-1"}>{post.user?.bio}</p>
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
