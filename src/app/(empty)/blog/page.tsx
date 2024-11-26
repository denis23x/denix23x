import { Separator } from "@/components/ui/separator";
import { AppGridEffect } from "@/components/app/app-grid-effect";
import type { Metadata } from "@/interfaces/metadata";
import { BlogItems } from "@/lib/items";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Discover resources across various topics, with tips, tutorials, and ideas to boost your projects. Find practical solutions, inspiring discussions, and guides to grow and innovate.",
};

export default async function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Blog</h1>
			<p className={"leading-7"}>
				This page offers insights and resources on various topics, sharing tips, tutorials, and ideas to support your
				projects and inspire creativity. Discover practical solutions, and detailed guides that can help you learn,
				grow, and implement new strategies with ease.
			</p>
			<Separator />
			<AppGridEffect
				items={await BlogItems()}
				className={"sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"}
			/>
		</div>
	);
}
