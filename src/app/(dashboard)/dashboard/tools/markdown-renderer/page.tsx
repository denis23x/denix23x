import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { navMainMarkdownRenderer } from "@/stores/useNavMain";
import Editor from "@/components/markdown-render/editor";

export const metadata: Metadata = {
	title: navMainMarkdownRenderer.title,
	description: navMainMarkdownRenderer.description,
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
