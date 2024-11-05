import { Separator } from "@/components/ui/separator";
import ColorPicker from "@/app/dashboard/color-converter/components/color-picker";
import ColorPickerInput from "@/app/dashboard/color-converter/components/color-picker-input";
import ColorPalette from "@/app/dashboard/color-converter/components/color-palette";
import ColorOutput from "@/app/dashboard/color-converter/components/color-output";
import ColorHarmony from "@/app/dashboard/color-converter/components/color-harmony";

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>Color Converter</h1>
			<p className={"leading-7"}>
				This tool provides a quick and easy way to convert color values across different formats, including{" "}
				<strong>HEX</strong>, <strong>RGB</strong>, <strong>HSL</strong>, and more. With just a few clicks, you can
				seamlessly switch between color models, allowing for flexible styling options and precise color matching in your
				projects.
			</p>
			<Separator />
			<div className={"flex items-start flex-wrap gap-4"}>
				<ColorPicker />
				<div className={"grid gap-4"}>
					<ColorPickerInput />
					<ColorPalette />
				</div>
			</div>
			<ColorOutput />
			<ColorHarmony />
		</div>
	);
}
