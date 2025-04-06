import { Separator } from "@/components/ui/separator";
import type { Metadata } from "@/interfaces/metadata";
import Input from "@/components/dashboard/tools/svg-to-css-encoder/textarea";
import Output from "@/components/dashboard/tools/svg-to-css-encoder/output";
import { Images } from "lucide-react";

export const metadata: Metadata = {
	title: "SVG to CSS Encoder",
	description:
		"Generate customizable placeholder images with specific dimensions, colors, and text for quick visualization and layout testing in web and app development projects.",
	other: {
		icon: <Images />,
	},
	alternates: {
		canonical: `https://denis23x.info/dashboard/tools/svg-to-css-encoder`,
	},
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
