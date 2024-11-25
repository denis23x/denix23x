import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";
import {
	navMainBlogGitWorkflowWithHuskyAndConventionalCommits,
	navMainBlogHowToCreateDynamicSitemapForSEO,
	navMainBlogHowToMakeStorageUrlsSEOFriendly,
	navMainBlogHowToSummarizeTextInTypeScriptWithoutAI,
	navMainBlogHowToUseSvgSpriteIconsForDevelopment,
} from "@/stores/nav-main.store";
import { Map, Bot, Images, GitMerge, Package } from "lucide-react";
import { AppGridEffect } from "@/components/app/app-grid-effect";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Discover resources across various topics, with tips, tutorials, and ideas to boost your projects. Find practical solutions, inspiring discussions, and guides to grow and innovate.",
};

export default async function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Blog</h1>
			<p className={"leading-7"}>
				This page offers insights and resources on various topics, sharing tips, tutorials, and ideas to support your
				projects and inspire creativity. Discover practical solutions, and detailed guides that can help you learn,
				grow, and implement new strategies with ease.
			</p>
			<Separator />
			<AppGridEffect items={items} />
		</div>
	);
}

const items = [
	{
		...navMainBlogGitWorkflowWithHuskyAndConventionalCommits,
		icon: <GitMerge />,
	},
	{
		...navMainBlogHowToCreateDynamicSitemapForSEO,
		icon: <Map />,
	},
	{
		...navMainBlogHowToMakeStorageUrlsSEOFriendly,
		icon: <Package />,
	},
	{
		...navMainBlogHowToSummarizeTextInTypeScriptWithoutAI,
		icon: <Bot />,
	},
	{
		...navMainBlogHowToUseSvgSpriteIconsForDevelopment,
		icon: <Images />,
	},
];
