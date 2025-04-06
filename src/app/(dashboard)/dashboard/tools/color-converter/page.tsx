import { Separator } from "@/components/ui/separator";
import type { Metadata } from "@/interfaces/metadata";
import Picker from "@/components/dashboard/tools/color-converter/picker";
import PickerInput from "@/components/dashboard/tools/color-converter/picker-input";
import Palette from "@/components/dashboard/tools/color-converter/palette";
import Output from "@/components/dashboard/tools/color-converter/output";
import Harmony from "@/components/dashboard/tools/color-converter/harmony";
import { Palette as PaletteIcon } from "lucide-react";

export const metadata: Metadata = {
	title: "Color Converter",
	description:
		"Easily convert color values across formats like HEX, RGB, and HSL. Switch between models with a click for flexible styling and precise color matching in projects.",
	other: {
		icon: <PaletteIcon />,
	},
	alternates: {
		canonical: `${process.env.PUBLIC_URL!}/dashboard/tools/color-converter`,
	},
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Color Converter</h1>
			<p className={"leading-7"}>
				This tool provides a quick and easy way to convert color values across different formats, including{" "}
				<strong>HEX</strong>, <strong>RGB</strong>, <strong>HSL</strong>, and more. With just a few clicks, you can
				seamlessly switch between color models, allowing for flexible styling options and precise color matching in your
				projects.
			</p>
			<Separator />
			<div className={"flex items-start flex-col xl:flex-row gap-4"}>
				<Picker />
				<div className={"grid gap-4 flex-1"}>
					<PickerInput />
					<Palette />
				</div>
			</div>
			<Output />
			<Harmony />
		</div>
	);
}
