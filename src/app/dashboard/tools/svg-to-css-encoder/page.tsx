import { Separator } from "@/components/ui/separator";
import SvgInput from "./components/svg-input";
import SvgOutput from "./components/svg-output";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SVG to CSS Encoder",
	description:
		"Convert SVG code to a Data URI format for direct CSS use, enabling embedded SVG images within stylesheets, reducing server requests for faster page loads.",
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>SVG to CSS Encoder</h1>
			<p className={"leading-7"}>
				This tool transforms <strong>SVG</strong> code into a <strong>Data URI format</strong>, creating an encoded{" "}
				<strong>URL</strong> that can be used directly as a{" "}
				<code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
					background-image
				</code>{" "}
				in <strong>CSS</strong>. Essentially, it lets you embed <strong>SVG</strong> images directly within your
				stylesheets, eliminating the need to host separate image files and reducing server requests for faster loading
				times.
			</p>
			<Separator />
			<SvgInput />
			<SvgOutput />
		</div>
	);
}
