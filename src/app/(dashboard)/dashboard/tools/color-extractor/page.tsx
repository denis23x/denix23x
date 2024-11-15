import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { navMainColorExtractor } from "@/stores/useNavMain";
import Preview from "@/components/color-extractor/preview";
import Input from "@/components/color-extractor/input";
import Palette from "@/components/color-extractor/palette";

export const metadata: Metadata = {
	title: navMainColorExtractor.title,
	description: navMainColorExtractor.description,
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Color Extractor</h1>
			<p className={"leading-7"}>
				This tool creates a color palette from any image, including an average <strong>HUE</strong>, offering a fast way
				to apply the visual theme of an image to various <strong>UI</strong> components. It helps designers maintain
				visual consistency, enabling the creation of custom color schemes that align with the overall aesthetic of the
				image.
			</p>
			<Separator />
			<div className={"flex items-start flex-col xl:flex-row gap-4"}>
				<Preview></Preview>
				<div className={"grid gap-4 flex-1"}>
					<Input></Input>
					<Palette></Palette>
				</div>
			</div>
		</div>
	);
}
