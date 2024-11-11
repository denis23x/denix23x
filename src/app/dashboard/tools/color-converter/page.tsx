import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { navMainColorConverter } from "@/app/store/useNavMain";
import ColorPicker from "./components/color-picker";
import ColorPickerInput from "./components/color-picker-input";
import ColorPalette from "./components/color-palette";
import ColorOutput from "./components/color-output";
import ColorHarmony from "./components/color-harmony";

export const metadata: Metadata = {
	title: navMainColorConverter.title,
	description: navMainColorConverter.description,
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
				<ColorPicker />
				<div className={"grid gap-4 flex-1"}>
					<ColorPickerInput />
					<ColorPalette />
				</div>
			</div>
			<ColorOutput />
			<ColorHarmony />
		</div>
	);
}
