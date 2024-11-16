import type { demoBook, demoReview, demoUser } from "@prisma/client";
import { Ratings } from "@/components/ui/ratings";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { headers } from "next/headers";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

type Id = {
	id: string;
};

interface demoBookWU<U> extends demoBook {
	user: U;
}

interface demoReviewWU<U> extends demoReview {
	user: U;
}

export default async function Page({ params }: { params: Promise<Id> }) {
	const headersList: ReadonlyHeaders = await headers();
	const host: string | null = headersList.get("x-origin");
	const { id: bookId }: { id: string } = await params;
	const [rBook, rReviews]: Response[] = await Promise.all([
		fetch(`${host}/api/v1/placeholder/books/${bookId}`),
		fetch(`${host}/api/v1/placeholder/reviews?bookId=${bookId}&page=${1}&pageSize=${100}`),
	]);

	const { data: book }: { data: demoBookWU<demoUser> } = await rBook.json();
	const { data: reviews }: { data: demoReviewWU<demoUser>[] } = await rReviews.json();

	return (
		<div className={"grid gap-4 md:gap-12"}>
			<div className={"bg-background border border-input rounded-xl overflow-hidden w-full"}>
				{book.cover && (
					<Link href={book.cover} target={"_blank"} rel={"noopener noreferrer"}>
						<Image
							priority={true}
							className={"w-full aspect-video object-cover object-center"}
							width={512}
							height={512}
							src={book.cover}
							alt={book.title}
						/>
					</Link>
				)}
				<div className={"grid gap-4 p-4"}>
					<Link className={"flex items-center gap-4"} href={`../users/${book.user?.id}`}>
						{book.user?.avatar && (
							<figure className={"rounded-full overflow-hidden size-12"}>
								<Image
									priority={true}
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
					</Link>
					<Separator />
					<h2 className={"text-4xl font-extrabold tracking-tight md:text-5xl first-letter:uppercase"}>{book.title}</h2>
					<p className={"leading-7 inline-block first-letter:uppercase"}>{book.description}</p>
				</div>
			</div>
			<span className={"text-2xl font-semibold tracking-tight"}>
				Comments <span className={"text-muted-foreground"}>({reviews.length})</span>
			</span>
			{reviews.length ? (
				<ul className={"grid gap-4"}>
					{reviews.map((review: demoReviewWU<demoUser>) => (
						<li
							className={"flex flex-col gap-4 rounded-xl bg-background border border-input overflow-hidden p-4"}
							key={review.id}
						>
							<Link className={"flex items-center gap-4"} href={`../users/${review.user?.id}`}>
								{review.user?.avatar && (
									<figure className={"rounded-full overflow-hidden size-12"}>
										<Image
											className={"size-full aspect-square object-cover object-center"}
											width={48}
											height={48}
											src={review.user?.avatar}
											alt={review.user?.name}
										/>
									</figure>
								)}
								<div className={"flex flex-col items-stretch flex-1 gap-1"}>
									<span className={"font-semibold tracking-tight"}>{review.user?.name}</span>
									<Ratings rating={review.rating} variant={"yellow"} />
								</div>
							</Link>
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
