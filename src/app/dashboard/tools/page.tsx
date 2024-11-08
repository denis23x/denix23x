"use client";

import { Separator } from "@/components/ui/separator";
import { AppGridEffect } from "@/components/app-grid-effect";
import { Palette, Image, Code, SwatchBook, Type, Scroll, Images } from "lucide-react";
import {
	navMainColorConverter,
	navMainColorExtractor,
	navMainLoremIpsum,
	navMainMarkdownRenderer,
	navMainPlaceholderApi,
	navMainPlaceholderImage,
	navMainSvgToCssEncoder,
} from "@/store/useNavMain";

export default function Page() {
	const items = [
		{
			...navMainColorConverter,
			icon: Palette,
		},
		{
			...navMainColorExtractor,
			icon: SwatchBook,
		},
		{
			...navMainLoremIpsum,
			icon: Scroll,
		},
		{
			...navMainMarkdownRenderer,
			icon: Type,
		},
		{
			...navMainPlaceholderApi,
			icon: Code,
		},
		{
			...navMainPlaceholderImage,
			icon: Image,
		},
		{
			...navMainSvgToCssEncoder,
			icon: Images,
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
