import { Wrench } from "lucide-react";
import { globby } from "globby";
import Link from "next/link";
import path from "node:path";

export default async function Page() {
	const paths = await globby("src/app/blog", {
		expandDirectories: {
			files: ["page.mdx"],
		},
	}).then(paths => paths.map(p => path.dirname(p).split("/").pop()));

	const pages = await Promise.all(
		paths.map(async p => {
			const { metadata } = await import(`./${p}/page.mdx`);

			return {
				url: `/blog/${p}`,
				...metadata,
			};
		})
	);

	return (
		<div className={"bg-background p-4"}>
			<div className="h-screen w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
				<span className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></span>
				<div className={"text-foreground max-w-4xl"}>
					<Wrench className={"size-14"} />
					<span className="block text-4xl sm:text-7xl font-bold relative z-20 py-4">
						<span className={"text-red-400"}>Dev</span>Blog
					</span>
					<span>
						This page offers insights and resources on various topics, sharing tips, tutorials, and ideas to support
						your projects and inspire creativity. Discover practical solutions, thought-provoking discussions, and
						detailed guides that can help you learn, grow, and implement new strategies with ease.
					</span>
				</div>
			</div>
			<div className={"max-w-4xl mx-auto"}>
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
		</div>
	);
}
