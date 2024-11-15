import { Metadata } from "next";
import { Book } from "../types/book";
import { Ratings } from "@/components/ui/ratings";
import { Review } from "../types/review";

export const metadata: Metadata = {
	title: "Lorem Ipsum Demo",
	description: "Lorem Ipsum Demo",
};

type Id = {
	id: string;
};

export default async function Page({ params }: { params: Promise<Id> }) {
	const host: string = "http://localhost:3000";
	const { id }: { id: string } = await params;
	const [rBook, rReviews]: Response[] = await Promise.all([
		fetch(`${host}/api/v1/placeholder/books/${id}`),
		fetch(`${host}/api/v1/placeholder/reviews?bookId=${id}`),
	]);

	const { data: book }: { data: Book } = await rBook.json();
	const { data: reviews }: { data: Review[] } = await rReviews.json();

	return (
		<div className={"grid gap-4 md:gap-12 w-full max-w-4xl mx-auto py-4 md:py-12 px-4 text-foreground"}>
			<h1 className={"text-4xl font-extrabold tracking-tight md:text-5xl"}>{book.title}</h1>
			<div className={"bg-background border border-input rounded-xl p-4 leading-7 w-full"}>
				{book.cover && (
					<img
						className={"size-24 sm:size-48 float-left aspect-square border border-input rounded-xl mr-4"}
						width={512}
						height={512}
						loading={"lazy"}
						src={book.cover}
						alt={book.title}
					/>
				)}
				{book.description}
			</div>
			<h2 className={"text-2xl font-extrabold tracking-tight md:text-4xl"}>
				Reviews <span className={"text-muted-foreground"}>({reviews.length})</span>
			</h2>
			<ul className={"grid gap-4"}>
				{reviews.map((review: Review) => (
					<li
						className={"flex flex-col gap-4 rounded-xl bg-background border border-input overflow-hidden p-4"}
						key={review.id}
					>
						<div className={"flex items-center gap-4"}>
							<figure className={"rounded-lg overflow-hidden size-12"}>
								<img
									className={"size-full aspect-square object-cover object-center"}
									width={48}
									height={48}
									loading={"lazy"}
									src={`https://api.dicebear.com/9.x/fun-emoji/svg?size=48&seed=${review.user?.name}`}
									alt={review.user?.name}
								/>
							</figure>
							<div className={"flex flex-col items-stretch gap-1"}>
								<span className={"text-base font-semibold tracking-tight"}>{review.user?.name}</span>
								<Ratings rating={review.rating} variant={"yellow"} />
							</div>
						</div>
						<p className={"leading-7"}>{review.message}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
