import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { navMainPlaylist } from "@/store/useNavMain";
import ExpandableCard from "./components/expandable-card";
import ExpandableGrid from "./components/expandable-grid";

export const metadata: Metadata = {
	title: navMainPlaylist.title,
	description: navMainPlaylist.description,
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>Playlist</h1>
			<p className={"leading-7"}>
				This page offers a curated selection of my favorite albums, showcasing a range of genres and artists that
				inspire me. Discover albums that have left a lasting impact, with insights on standout tracks and what makes
				each one unique. Dive into a blend of sounds and styles, perfect for expanding your musical horizons or simply
				finding your next favorite playlist.
			</p>
			<Separator />
			<ExpandableCard />
			<ExpandableGrid />
		</div>
	);
}
