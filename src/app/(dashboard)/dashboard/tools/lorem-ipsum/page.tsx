import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { navMainLoremIpsum } from "@/stores/useNavMain";
import Radio from "@/components/lorem-ipsum/radio";
import Number from "@/components/lorem-ipsum/count";
import Textarea from "@/components/lorem-ipsum/textarea";

export const metadata: Metadata = {
	title: navMainLoremIpsum.title,
	description: navMainLoremIpsum.description,
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Lorem Ipsum</h1>
			<p className={"leading-7"}>
				This tool generates placeholder <i>Lorem Ipsum</i> text, providing customizable dummy text for web and{" "}
				<strong>UI</strong> design projects. It allows developers and designers to quickly fill layouts with realistic,
				non-distracting text that simulates real content, aiding in visualizing and testing page structure, fonts, and
				spacing.
			</p>
			<Separator />
			<Radio />
			<Number />
			<Textarea />
		</div>
	);
}
