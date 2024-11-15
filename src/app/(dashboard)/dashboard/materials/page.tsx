import { globby } from "globby";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import path from "node:path";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Materials",
	description:
		"Discover resources across various topics, with tips, tutorials, and ideas to boost your projects. Find practical solutions, inspiring discussions, and guides to grow and innovate.",
};

export default async function Page() {
	const paths = await globby("src/app/(dashboard)/dashboard/materials", {
		expandDirectories: {
			files: ["page.mdx"],
		},
	}).then(paths => paths.map(p => path.dirname(p).split("/").pop()));

	const pages = await Promise.all(
		paths.map(async p => {
			const { metadata } = await import(`./${p}/page.mdx`);

			return {
				url: `/dashboard/materials/${p}`,
				...metadata,
			};
		})
	);

	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Materials</h1>
			<p className={"leading-7"}>
				This page offers insights and resources on various topics, sharing tips, tutorials, and ideas to support your
				projects and inspire creativity. Discover practical solutions, and detailed guides that can help you learn,
				grow, and implement new strategies with ease.
			</p>
			<Separator />
			<ul className={"grid gap-8"}>
				{pages.map((item, i) => (
					<li key={i}>
						<Link className={"underline font-semibold text-blue-600 dark:text-blue-400"} href={item.url}>
							{item.title}
						</Link>
						<p className={"leading-7"}>{item.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
