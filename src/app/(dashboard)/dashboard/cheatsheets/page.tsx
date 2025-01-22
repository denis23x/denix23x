import { Separator } from "@/components/ui/separator";
import { AppGridEffect } from "@/components/app/app-grid-effect";
import type { Metadata } from "@/interfaces/metadata";
import { CheatSheetsItems } from "@/lib/items";

export const metadata: Metadata = {
	title: "Cheat Sheets",
	description:
		"A curated collection of modern web development cheat sheets, covering HTML, CSS, JavaScript, frameworks, and tools. Boost your productivity with quick, essential references.",
};

export default async function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Cheat Sheets</h1>
			<p className={"leading-7"}>
				This page is a curated collection of modern web development cheat sheets, covering essential topics like HTML,
				CSS, JavaScript, frameworks, and tools. It&#39;s a handy reference hub designed to help developers quickly find
				key information and improve productivity, with links to explore various facets of web development.
			</p>
			<Separator />
			<AppGridEffect items={await CheatSheetsItems()} />
		</div>
	);
}
