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
	"IMG_0392.webp",
	"IMG_4726.webp",
	"IMG_5360.webp",
	"IMG_5419.webp",
	"IMG_6197.webp",
	"IMG_6742.webp",
	"IMG_7021.webp",
	"IMG_7192.webp",
	"IMG_7421.webp",
	"IMG_8342.webp",
	"IMG_8646.webp",
	"IMG_9112.webp",
	"IMG_9586.webp",
	"IMG_9929.webp",
];
