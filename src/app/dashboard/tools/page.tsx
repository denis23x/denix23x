"use client";

import { Separator } from "@/components/ui/separator";
import { AppGridEffect } from "@/components/app-grid-effect";
import { Palette, Image, Code, SwatchBook, Type, Scroll, Images } from "lucide-react";

export default function Page() {
	const items = [
		{
			title: "Color Converter",
			description: "A technology company that builds economic infrastructure for the internet.",
			icon: Palette,
			link: "/dashboard/tools/color-converter",
		},
		{
			title: "Color Extractor",
			description:
				"A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
			icon: SwatchBook,
			link: "/dashboard/tools/color-extractor",
		},
		{
			title: "Placeholder Image",
			description: "A multinational technology company that specializes in Internet-related services and products.",
			icon: Image,
			link: "/dashboard/tools/placeholder-image",
		},
		{
			title: "Placeholder API",
			description:
				"A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
			icon: Code,
			link: "/dashboard/tools/placeholder-api",
		},
		{
			title: "Lorem Ipsum",
			description:
				"A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
			icon: Scroll,
			link: "/dashboard/tools/lorem-ipsum",
		},
		{
			title: "Markdown Renderer",
			description:
				"A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
			icon: Type,
			link: "/dashboard/tools/markdown-renderer",
		},
		{
			title: "SVG to CSS Encoder",
			description:
				"A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
			icon: Images,
			link: "/dashboard/tools/svg-to-css-encoder",
		},
	];

	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>Tools</h1>
			<p className={"leading-7"}>
				This page brings together a collection of handy tools designed to simplify and enhance your workflow. From quick
				color conversions to code generators, each tool offers intuitive features for fast and effective results.
			</p>
			<Separator />
			<AppGridEffect items={items} />
		</div>
	);
}
