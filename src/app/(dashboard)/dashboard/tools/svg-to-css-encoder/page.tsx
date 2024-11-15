import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { navMainSvgToCssEncoder } from "@/stores/nav-main.store";
import Input from "@/components/dashboard/tools/svg-to-css-encoder/textarea";
import Output from "@/components/dashboard/tools/svg-to-css-encoder/output";

export const metadata: Metadata = {
	title: navMainSvgToCssEncoder.title,
	description: navMainSvgToCssEncoder.description,
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>SVG to CSS Encoder</h1>
			<p className={"leading-7"}>
				This tool transforms <strong>SVG</strong> code into a <strong>Data URI format</strong>, creating an encoded{" "}
				<strong>URL</strong> that can be used directly as a <code className="inline-code">background-image</code> in{" "}
				<strong>CSS</strong>. Essentially, it lets you embed <strong>SVG</strong> images directly within your
				stylesheets, eliminating the need to host separate image files and reducing server requests for faster loading
				times.
			</p>
			<Separator />
			<Input />
			<Output />
		</div>
	);
}