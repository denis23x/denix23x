import type { demoBook, demoUser, demoReview } from "@prisma/client";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { headers } from "next/headers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ratings } from "@/components/ui/ratings";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

type Id = {
	id: string;
};

export default async function Page({ params }: { params: Promise<Id> }) {
	const headersList: ReadonlyHeaders = await headers();
	const host: string | null = headersList.get("x-origin");
	const { id: userId }: { id: string } = await params;
	const [rUser, rBooks, rReviews]: Response[] = await Promise.all([
		fetch(`${host}/api/v1/placeholder/users/${userId}`),
		fetch(`${host}/api/v1/placeholder/books?userId=${userId}&page=${1}&pageSize=${100}`),
		fetch(`${host}/api/v1/placeholder/reviews?userId=${userId}&page=${1}&pageSize=${100}`),
	]);

	const { data: user }: { data: demoUser } = await rUser.json();
	const { data: books }: { data: demoBook[] } = await rBooks.json();
	const { data: reviews }: { data: demoReview[] } = await rReviews.json();

	return (
		<div className={"grid gap-4 md:gap-12"}>
			<div className={"flex flex-col gap-4 bg-background border border-input rounded-xl p-4 w-full"}>
				<div className={"flex items-center gap-4"}>
					{user?.avatar && (
						<figure className={"rounded-full overflow-hidden size-12"}>
							<Image
								priority={true}
								className={"size-full aspect-square object-cover object-center"}
								width={48}
								height={48}
								src={user?.avatar}
								alt={user?.name}
							/>
						</figure>
					)}
					<div className={"flex flex-col items-stretch flex-1"}>
						<span className={"font-semibold tracking-tight"}>{user?.name}</span>
						<Link
							className={"leading-7 line-clamp-1 underline text-muted-foreground text-xs"}
							href={`mailto:${user.email}`}
						>
							{user.email}
						</Link>
					</div>
				</div>
				<Separator />
				<p className={"leading-7"}>{user.bio}</p>
			</div>
			<span className={"text-2xl font-semibold tracking-tight"}>
				Posts <span className={"text-muted-foreground"}>({books.length})</span>
			</span>
			{books.length ? (
				<ul className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
					{books.map((book: demoBook) => (
						<li className={"col-span-1 rounded-xl overflow-hidden border border-input"} key={book.id}>
							<div className={"grid gap-4 bg-background size-full p-4"}>
								<Link className={""} href={`../posts/${book.id}`}>
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
							</div>
						</li>
					))}
				</ul>
			) : (
				<span className={"text-muted-foreground mx-auto text-2xl border border-input p-8 rounded-xl w-full"}>
					No Posts
				</span>
			)}
			<span className={"text-2xl font-semibold tracking-tight"}>
				Comments <span className={"text-muted-foreground"}>({reviews.length})</span>
			</span>
			{reviews.length ? (
				<ul className={"grid gap-4"}>
					{reviews.map((review: demoReview) => (
						<li
							className={"flex flex-col gap-4 rounded-xl bg-background border border-input overflow-hidden p-4"}
							key={review.id}
						>
							<Ratings rating={review.rating} variant={"yellow"} />
							<p className={"leading-7"}>{review.message}</p>
						</li>
					))}
				</ul>
			) : (
				<span className={"text-muted-foreground mx-auto text-2xl border border-input p-8 rounded-xl w-full"}>
					No Comments
				</span>
			)}
			<Link className={"w-fit mx-auto"} href={"../"}>
				<Button variant={"outline"}>Placeholder API</Button>
			</Link>
		</div>
	);
}
