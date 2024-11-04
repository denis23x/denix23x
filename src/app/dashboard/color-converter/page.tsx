"use client";

import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileCode2, Palette, SwatchBook } from "lucide-react";
import { RgbaStringColorPicker } from "react-colorful";
import { colord, random } from "colord";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import MemoizedOutput from "./components/memoized-output";
import MemoizedHarmony from "./components/memoized-harmony";
import MemoizedPalette from "./components/memoized-palette";

export default function Page() {
	const [color, setColor] = useState<string>("");

	const colorPicker: string = useMemo(() => (color.startsWith("rgba") ? color : colord(color).toRgbString()), [color]);

	useEffect(() => {
		setColor(random().toRgbString());
	}, []);

	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>Color Converter</h1>
			<p className={"leading-7"}>
				This tool provides a quick and easy way to convert color values across different formats, including{" "}
				<strong>HEX</strong>, <strong>RGB</strong>, <strong>HSL</strong>, and more. With just a few clicks, you can
				seamlessly switch between color models, allowing for flexible styling options and precise color matching in your
				projects.
			</p>
			<div className={"flex items-stretch flex-wrap gap-4"}>
				<div className={"grid gap-2"}>
					<div className={"flex items-center gap-1"}>
						<Button className={"size-7"} variant={"ghost"} size={"icon"}>
							<Palette />
						</Button>
						<span className={"text-lg font-semibold"}>Color Picker</span>
					</div>
					<div className={"flex gap-6"}>
						<div className={"bg-muted/50 rounded-lg size-[200px]"}>
							<RgbaStringColorPicker color={colorPicker} onChange={setColor} />
						</div>
						<div className={"bg-muted/50 rounded-lg size-[200px] hidden sm:block overflow-hidden"}>
							<div className={"size-full"} style={{ backgroundColor: color ? colorPicker : "transparent" }}></div>
						</div>
					</div>
				</div>
				<div className={"grid gap-2"}>
					<fieldset className={"grid gap-2"}>
						<Label className={"flex items-center gap-1"} htmlFor={"colorful-input"}>
							<Button className={"size-7"} variant={"ghost"} size={"icon"}>
								<FileCode2 />
							</Button>
							<span className={"text-lg font-semibold"}>Color Input</span>
						</Label>
						<Input
							className={"bg-sidebar"}
							type={"text"}
							id={"colorful-input"}
							placeholder={"HEX, RGB, HSL"}
							value={color}
							onInput={(e: ChangeEvent<HTMLInputElement>) => setColor(e.target.value)}
						/>
						<p className={"text-sm text-muted-foreground"}>Paste your color in any known format</p>
					</fieldset>
					<div className={"grid gap-2"}>
						<div className={"flex items-center gap-1"}>
							<Button className={"size-7"} variant={"ghost"} size={"icon"}>
								<SwatchBook />
							</Button>
							<span className={"text-lg font-semibold"}>Color palette</span>
						</div>
						<MemoizedPalette color={color} />
					</div>
				</div>
			</div>
			<div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
				<MemoizedOutput color={color} model={"rgba"} />
				<MemoizedOutput color={color} model={"hex"} />
				<MemoizedOutput color={color} model={"hsl"} />
				<MemoizedOutput color={color} model={"lch"} />
				<MemoizedOutput color={color} model={"hwb"} />
				<MemoizedOutput color={color} model={"name"} />
			</div>
			<div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"}>
				<MemoizedHarmony color={color} harmony={"analogous"} />
				<MemoizedHarmony color={color} harmony={"complementary"} />
				<MemoizedHarmony color={color} harmony={"rectangle"} />
				<MemoizedHarmony color={color} harmony={"tetradic"} />
				<MemoizedHarmony color={color} harmony={"triadic"} />
			</div>
		</div>
	);
}
