import { Button } from "@/components/ui/button";
import { Palette, SwatchBook } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ColorPicker from "./components/color-picker";
import ColorPickerInput from "./components/color-picker-input";
import ColorPickerPreview from "@/app/dashboard/color-converter/components/color-picker-preview";
import ColorPalette from "@/app/dashboard/color-converter/components/color-palette";
import ColorOutput from "./components/color-output";
import ColorHarmony from "./components/color-harmony";

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
				<div className={"grid gap-2"}>
					<div className={"flex items-center gap-1"}>
						<Button className={"size-7"} variant={"ghost"} size={"icon"}>
							<Palette />
						</Button>
						<span className={"text-lg font-semibold"}>Color Picker</span>
					</div>
					<div className={"flex gap-4"}>
						<div className={"border shadow-sm bg-muted/50 rounded-lg size-[200px]"}>
							<ColorPicker></ColorPicker>
						</div>
						<div className={"border shadow-sm bg-muted/50 rounded-lg size-[200px] hidden sm:block overflow-hidden"}>
							<ColorPickerPreview></ColorPickerPreview>
						</div>
					</div>
				</div>
				<div className={"grid gap-4"}>
					<ColorPickerInput></ColorPickerInput>
					<div className={"grid gap-2"}>
						<div className={"flex items-center gap-1"}>
							<Button className={"size-7"} variant={"ghost"} size={"icon"}>
								<SwatchBook />
							</Button>
							<span className={"text-lg font-semibold"}>Color palette</span>
						</div>
						<ColorPalette />
					</div>
				</div>
			</div>
			<div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
				<ColorOutput model={"rgba"} />
				<ColorOutput model={"hex"} />
				<ColorOutput model={"hsl"} />
				<ColorOutput model={"lch"} />
				<ColorOutput model={"hwb"} />
				<ColorOutput model={"name"} />
			</div>
			<div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
				<ColorHarmony harmony={"analogous"} />
				<ColorHarmony harmony={"complementary"} />
				<ColorHarmony harmony={"rectangle"} />
				<ColorHarmony harmony={"tetradic"} />
				<ColorHarmony harmony={"triadic"} />
			</div>
		</div>
	);
}
