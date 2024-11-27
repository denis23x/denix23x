import { Separator } from "@/components/ui/separator";
import { CircleAlert, Unplug } from "lucide-react";
import type { Metadata } from "@/interfaces/metadata";
import Chat from "@/components/dashboard/demos/websocket/chat";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const metadata: Metadata = {
	title: "WebSocket",
	description:
		"Explore my WebSocket chat demo! Experience real-time messaging and seamless communication powered by WebSocket technology.",
	other: {
		icon: <Unplug />,
	},
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>WebSocket</h1>
			<p className={"leading-7"}>
				This page provides a live demonstration of my WebSocket chat implementation. It showcases real-time messaging
				functionality, highlighting the seamless communication enabled by WebSocket technology. Dive in to explore how
				it works and interact with the system in real time.
			</p>
			<Separator />
			<Alert variant="destructive">
				<AlertDescription className={"flex flex-col sm:flex-row items-start gap-2"}>
					<CircleAlert className={"min-w-4 size-4 translate-y-0.5"} />
					<span className={"inline-block"}>
						<strong>All data processed through this API will be moderated using OpenAI&#39;s systems</strong>. Avoid
						submitting sensitive or personal information. Use this API for experimental and testing purposes only, as
						data may be subject to removal or modification without notice.
					</span>
				</AlertDescription>
			</Alert>
			<Chat />
		</div>
	);
}
