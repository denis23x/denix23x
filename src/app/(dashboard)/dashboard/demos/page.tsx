import { Separator } from "@/components/ui/separator";
import { AppGridEffect } from "@/components/app/app-grid-effect";
import type { Metadata } from "@/interfaces/metadata";
import { DemosItems } from "@/lib/items";

export const metadata: Metadata = {
	title: "Demos",
	description:
		"Discover a collection of interactive demos showcasing my development work, from WebSocket chat to tech experiments. Explore and experience web technologies live!",
};

export default async function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Misc</h1>
			<p className={"leading-7"}>
				This page brings together a variety of interactive demos showcasing my development work. From real-time
				WebSocket chat to other tech experiments, each demo provides hands-on experience with different web
				technologies. Explore, test, and see the functionality in action.
			</p>
			<Separator />
			<AppGridEffect items={await DemosItems()} />
		</div>
	);
}
