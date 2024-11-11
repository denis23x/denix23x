import { Separator } from "@/components/ui/separator";
import { AppGridEffect } from "@/components/app-grid-effect";
import { Palette, Image, Code, SwatchBook, Type, Scroll, Images } from "lucide-react";
import {
	navMainBlurHashImage,
	navMainColorConverter,
	navMainColorExtractor,
	navMainLoremIpsum,
	navMainMarkdownRenderer,
	navMainPlaceholderApi,
	navMainPlaceholderImage,
	navMainSvgToCssEncoder,
	navMainThumbHashImage,
} from "@/app/store/useNavMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Tools",
	description:
		"Discover a curated collection of tools to streamline your workflow. Access quick color converters, code generators, and more—each tool designed for efficient results.",
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Tools</h1>
			<p className={"leading-7"}>
				This page brings together a collection of handy tools designed to simplify and enhance your workflow. From quick
				color conversions to code generators, each tool offers intuitive features for fast and effective results.
			</p>
			<Separator />
			<AppGridEffect items={items} />
		</div>
	);
}

const items = [
	{
		...navMainBlurHashImage,
		icon: <Image />, // eslint-disable-line jsx-a11y/alt-text
	},
	{
		...navMainColorConverter,
		icon: <Palette />,
	},
	{
		...navMainColorExtractor,
		icon: <SwatchBook />,
	},
	{
		...navMainLoremIpsum,
		icon: <Scroll />,
	},
	{
		...navMainMarkdownRenderer,
		icon: <Type />,
	},
	{
		...navMainPlaceholderApi,
		icon: <Code />,
	},
	{
		...navMainPlaceholderImage,
		icon: <Image />, // eslint-disable-line jsx-a11y/alt-text
	},
	{
		...navMainSvgToCssEncoder,
		icon: <Images />,
	},
	{
		...navMainThumbHashImage,
		icon: <Image />, // eslint-disable-line jsx-a11y/alt-text
	},
];
