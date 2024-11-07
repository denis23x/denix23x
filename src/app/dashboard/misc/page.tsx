"use client";

import { Separator } from "@/components/ui/separator";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Page() {
	const projects = [
		{
			title: "Playlist",
			description: "A technology company that builds economic infrastructure for the internet.",
			link: "/dashboard/tools/color-converter",
		},
	];

	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>Misc</h1>
			<p className={"leading-7"}>
				This page is a curated collection of my personal interests, from playlists and favorite games to movie
				recommendations and more. It&#39;s a space where I share a bit of everything, with links to explore different
				facets of what I enjoy.
			</p>
			<Separator />
			<div className="">
				<HoverEffect items={projects} />
			</div>
		</div>
	);
}
