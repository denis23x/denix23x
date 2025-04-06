import { Separator } from "@/components/ui/separator";
import { AppGridEffect } from "@/components/app/app-grid-effect";
import type { Metadata } from "@/interfaces/metadata";
import { ToolsItems } from "@/lib/items";

export const metadata: Metadata = {
	title: "Tools",
	description:
		"Discover a curated collection of tools to streamline your workflow. Access quick color converters, code generators, and more—each tool designed for efficient results.",
	alternates: {
		canonical: `${process.env.PUBLIC_URL!}/dashboard/tools`,
	},
};

export default async function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Tools</h1>
			<p className={"leading-7"}>
				This page brings together a collection of handy tools designed to simplify and enhance your workflow. From quick
				color conversions to code generators, each tool offers intuitive features for fast and effective results.
			</p>
			<Separator />
			<AppGridEffect items={await ToolsItems()} />
		</div>
	);
}
