import type { demoPost, demoComment, demoUser } from "@prisma/client";
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

interface demoPostWU<U> extends demoPost {
	user: U;
}

interface demoCommentWU<U> extends demoComment {
	user: U;
}

export default async function Page({ params }: { params: Promise<Id> }) {
	const headersList: ReadonlyHeaders = await headers();
	const host: string | null = headersList.get("x-origin");
	const { id: postId }: { id: string } = await params;
	const [rPost, rComments]: Response[] = await Promise.all([
		fetch(`${host}/api/v1/placeholder/posts/${postId}`),
		fetch(`${host}/api/v1/placeholder/comments?postId=${postId}&page=${1}&pageSize=${100}`),
	]);

	const { data: post }: { data: demoPostWU<demoUser> } = await rPost.json();
	const { data: comments }: { data: demoCommentWU<demoUser>[] } = await rComments.json();

	return (
		<div className={"grid gap-4 md:gap-12"}>
			<div className={"bg-background border border-input rounded-xl overflow-hidden w-full"}>
				{post.cover && (
					<Link href={post.cover} target={"_blank"} rel={"noopener noreferrer"}>
						<Image
							priority={true}
							className={"w-full aspect-video object-cover object-center"}
							width={512}
							height={512}
							src={post.cover}
							alt={post.title}
						/>
					</Link>
				)}
				<div className={"grid gap-4 p-4"}>
					<Link className={"flex items-center gap-4"} href={`../users/${post.user?.id}`}>
						{post.user?.avatar && (
							<figure className={"rounded-full overflow-hidden size-12"}>
								<Image
									priority={true}
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
					</Link>
					<Separator />
					<h2 className={"text-4xl font-extrabold tracking-tight md:text-5xl first-letter:uppercase"}>{post.title}</h2>
					<p className={"leading-7 inline-block first-letter:uppercase"}>{post.description}</p>
				</div>
			</div>
			<span className={"text-2xl font-semibold tracking-tight"}>
				Comments <span className={"text-muted-foreground"}>({comments.length})</span>
			</span>
			{comments.length ? (
				<ul className={"grid gap-4"}>
					{comments.map((comment: demoCommentWU<demoUser>) => (
						<li
							className={"flex flex-col gap-4 rounded-xl bg-background border border-input overflow-hidden p-4"}
							key={comment.id}
						>
							<Link className={"flex items-center gap-4"} href={`../users/${comment.user?.id}`}>
								{comment.user?.avatar && (
									<figure className={"rounded-full overflow-hidden size-12"}>
										<Image
											className={"size-full aspect-square object-cover object-center"}
											width={48}
											height={48}
											src={comment.user?.avatar}
											alt={comment.user?.name}
										/>
									</figure>
								)}
								<div className={"flex flex-col items-stretch flex-1 gap-1"}>
									<span className={"font-semibold tracking-tight"}>{comment.user?.name}</span>
									<Ratings rating={comment.rating} variant={"yellow"} />
								</div>
							</Link>
							<p className={"leading-7"}>{comment.message}</p>
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
