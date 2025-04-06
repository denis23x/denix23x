import { Separator } from "@/components/ui/separator";
import type { Metadata } from "@/interfaces/metadata";
import Radio from "@/components/dashboard/tools/lorem-ipsum/radio";
import Number from "@/components/dashboard/tools/lorem-ipsum/count";
import Textarea from "@/components/dashboard/tools/lorem-ipsum/textarea";
import { Scroll } from "lucide-react";

export const metadata: Metadata = {
	title: "Lorem Ipsum",
	description:
		"Generate customizable Lorem Ipsum text for web design, enabling designers to fill layouts with realistic, non-distracting text that simulates real content for visual testing.",
	other: {
		icon: <Scroll />,
	},
	alternates: {
		canonical: `${process.env.PUBLIC_URL!}/dashboard/tools/lorem-ipsum`,
	},
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
