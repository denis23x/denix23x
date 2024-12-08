import { Separator } from "@/components/ui/separator";
import type { Metadata } from "@/interfaces/metadata";
import TV from "@/components/tv";

export const metadata: Metadata = {
	title: "Demos1",
	description:
		"Explore interactive demos, including real-time Pusher-powered chat and other tech experiments. Test and experience web technologies.",
};

export default async function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Demos</h1>
			<p className={"leading-7"}>
				This page brings together a variety of interactive demos. From real-time Pusher-powered chat to other tech
				experiments, each demo provides hands-on experience with different web technologies. Explore, test, and see the
				functionality in action.
			</p>
			<Separator />
			<TV />
		</div>
	);
}
