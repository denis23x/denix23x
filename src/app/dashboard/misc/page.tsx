"use client";

import { Separator } from "@/components/ui/separator";
import { AppGridEffect } from "@/components/app-grid-effect";
import { Music } from "lucide-react";
import { navMainPlaylist } from "@/store/useNavMain";

export default function Page() {
	const items = [
		{
			...navMainPlaylist,
			icon: Music,
		},
	];

	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Misc</h1>
			<p className={"leading-7"}>
				This page is a curated collection of my personal interests, from playlists and favorite games to movie
				recommendations and more. It&#39;s a space where I share a bit of everything, with links to explore different
				facets of what I enjoy.
			</p>
			<Separator />
			<AppGridEffect items={items} />
		</div>
	);
}
