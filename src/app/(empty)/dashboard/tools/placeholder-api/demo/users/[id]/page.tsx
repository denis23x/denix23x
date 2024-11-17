import type { demoPost, demoUser, demoComment } from "@prisma/client";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { headers } from "next/headers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ratings } from "@/components/ui/ratings";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type Id = {
	id: string;
};

export default async function Page({ params }: { params: Promise<Id> }) {
	const headersList: ReadonlyHeaders = await headers();
	const host: string | null = headersList.get("x-origin");
	const { id: userId }: { id: string } = await params;
	const [rUser, rPosts, rComments]: Response[] = await Promise.all([
		fetch(`${host}/api/v1/placeholder/users/${userId}`),
		fetch(`${host}/api/v1/placeholder/posts?userId=${userId}&page=${1}&pageSize=${100}`),
		fetch(`${host}/api/v1/placeholder/comments?userId=${userId}&page=${1}&pageSize=${100}`),
	]);

	const { data: user }: { data: demoUser } = await rUser.json();
	const { data: posts }: { data: demoPost[] } = await rPosts.json();
	const { data: comments }: { data: demoComment[] } = await rComments.json();

	if (!user) {
		return notFound();
	} else {
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
							<Link className={"flex items-center gap-2 text-muted-foreground"} href={`mailto:${user.email}`}>
								<Mail className={"size-5"} />
								<span className={"leading-7 line-clamp-1 underline"}>{user.email}</span>
							</Link>
						</div>
					</div>
					<Separator />
					<p className={"leading-7"}>{user.bio}</p>
				</div>
				<span className={"text-2xl font-semibold tracking-tight"}>
					Posts <span className={"text-muted-foreground"}>({posts.length})</span>
				</span>
				{posts.length ? (
					<ul className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
						{posts.map((post: demoPost) => (
							<li className={"col-span-1 rounded-xl overflow-hidden border border-input"} key={post.id}>
								<div className={"grid gap-4 bg-background size-full p-4"}>
									<Link className={""} href={`../posts/${post.id}`}>
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
												<strong className={"line-clamp-1 text-2xl"}>{post.title}</strong>
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
					Comments <span className={"text-muted-foreground"}>({comments.length})</span>
				</span>
				{comments.length ? (
					<ul className={"grid gap-4"}>
						{comments.map((comment: demoComment) => (
							<li
								className={"flex flex-col gap-4 rounded-xl bg-background border border-input overflow-hidden p-4"}
								key={comment.id}
							>
								<Ratings rating={comment.rating} variant={"yellow"} />
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
}
