import { Separator } from "@/components/ui/separator";
import type { Metadata } from "@/interfaces/metadata";
import Editor from "@/components/dashboard/tools/markdown-render/editor";
import { Type } from "lucide-react";

export const metadata: Metadata = {
	title: "Markdown Renderer",
	description:
		"Render Markdown content in your browser and download the output. Perfect for developers and writers needing a quick way to preview formatted Markdown without switching apps.",
	other: {
		icon: <Type />,
	},
	alternates: {
		canonical: `${process.env.PUBLIC_URL!}/dashboard/tools/markdown-renderer`,
	},
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Markdown Renderer</h1>
			<p className={"leading-7"}>
				This tool allows you to render <strong>Markdown</strong> content directly in the browser and provides the option
				to download the output. It&#39;s ideal for developers and writers who want a quick way to see formatted{" "}
				<strong>Markdown</strong> without switching applications.
			</p>
			<Separator />
			<Editor />
		</div>
	);
}
