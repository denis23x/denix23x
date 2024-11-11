import { Separator } from "@/components/ui/separator";
import { AppGridEffect } from "@/components/app-grid-effect";
import { Bookmark, Camera, Music } from "lucide-react";
import { navMainBookmarks, navMainPhotos, navMainPlaylist } from "@/app/store/useNavMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Misc",
	description:
		"Explore a curated collection of personal favorites, including playlists, movie recommendations, and more. Discover links to explore all the things I enjoy.",
};

export default function Page() {
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

const items = [
	{
		...navMainBookmarks,
		icon: <Bookmark />,
	},
	{
		...navMainPhotos,
		icon: <Camera />,
	},
	{
		...navMainPlaylist,
		icon: <Music />,
	},
];
