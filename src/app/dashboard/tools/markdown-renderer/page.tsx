import { Separator } from "@/components/ui/separator";
import MarkdownEditor from "./components/markdown-editor";

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>Markdown Renderer</h1>
			<p className={"leading-7"}>
				This tool allows you to render Markdown content directly in the browser and provides the option to download the
				output. It&#39;s ideal for developers and writers who want a quick way to see formatted Markdown without
				switching applications.
			</p>
			<Separator />
			<MarkdownEditor />
		</div>
	);
}
