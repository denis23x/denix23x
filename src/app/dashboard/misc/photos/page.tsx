import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { navMainPhotos } from "@/app/store/useNavMain";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export const metadata: Metadata = {
	title: navMainPhotos.title,
	description: navMainPhotos.description,
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Photos</h1>
			<p className={"leading-7"}>
				This page showcases a collection of photographs captured during my travels, offering a glimpse into diverse
				landscapes, and moments that have inspired me. Each image tells a story, from serene natural vistas to vibrant
				city scenes, inviting you to experience the world through my lens.
			</p>
			<Separator />
			<ParallaxScroll images={images} />
		</div>
	);
}

const images = [
	"/dashboard/misc/playlist/hotline-miami-ost.webp",
	"/dashboard/misc/playlist/hotline-miami-ost.webp",
	"/dashboard/misc/playlist/hotline-miami-ost.webp",
	"/dashboard/misc/playlist/hotline-miami-ost.webp",
	"/dashboard/misc/playlist/hotline-miami-ost.webp",
	"/dashboard/misc/playlist/hotline-miami-ost.webp",
	"/dashboard/misc/playlist/hotline-miami-ost.webp",
	"/dashboard/misc/playlist/hotline-miami-ost.webp",
	"/dashboard/misc/playlist/hotline-miami-ost.webp",
	"/dashboard/misc/playlist/hotline-miami-ost.webp",
	"/dashboard/misc/playlist/hotline-miami-ost.webp",
	"/dashboard/misc/playlist/hotline-miami-ost.webp",
	"/dashboard/misc/playlist/hotline-miami-ost.webp",
	"/dashboard/misc/playlist/hotline-miami-ost.webp",
	"/dashboard/misc/playlist/hotline-miami-ost.webp",
	"/dashboard/misc/playlist/hotline-miami-ost.webp",
];
