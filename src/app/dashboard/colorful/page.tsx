"use client";

import { ChangeEvent, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Clipboard, FileCode2, Palette } from "lucide-react";
import { RgbaStringColorPicker } from "react-colorful";
import { colord, extend } from "colord";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { handleCopy } from "@/lib/browser";
import namesPlugin from "colord/plugins/names";

extend([namesPlugin]);

export default function Page() {
	const [color, setColor] = useState<string>("rgba(255,100, 150, 1)");

	const presetColors = ["#cd9323", "#1a53d8", "#9a2151", "#0d6416", "#8d2808"];

	const rgbaString: string = useMemo(() => {
		return color.startsWith("rgba") ? color : colord(color).toRgbString();
	}, [color]);

	const dataURLWrapper: Record<string, unknown> = {
		backgroundColor: rgbaString,
	};

	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>Colorful</h1>
			<p className={"leading-7"}>Description</p>
			<fieldset className={"grid w-full gap-2"}>
				<Label className={"flex items-center gap-1"} htmlFor={"colorful-input"}>
					<Button className={"size-7"} variant={"ghost"} size={"icon"}>
						<FileCode2 />
					</Button>
					<span className={"text-lg font-semibold"}>Color</span>
				</Label>
				<Input
					type="text"
					id="colorful-input"
					placeholder="Color"
					onInput={(e: ChangeEvent<HTMLInputElement>) => setColor(e.target.value)}
				/>
				<p className="text-sm text-muted-foreground">Your message will be copied to the support team.</p>
			</fieldset>
			<div className={"grid w-full gap-2"}>
				<div className={"flex items-center gap-1"}>
					<Button className={"size-7"} variant={"ghost"} size={"icon"}>
						<Palette />
					</Button>
					<span className={"text-lg font-semibold"}>Color Picker</span>
				</div>
				<RgbaStringColorPicker color={rgbaString} onChange={setColor} />
				<ul className={"flex items-center gap-1"}>
					{presetColors.map((presetColor: string, index: number) => (
						<li key={index}>
							<button className="size-7" style={{ background: presetColor }} onClick={() => setColor(presetColor)} />
						</li>
					))}
				</ul>
			</div>
			<div className={"size-20"} style={dataURLWrapper}></div>

			<div>
				<Button className={"shadow-none"} size="icon" variant={"outline"} onClick={() => handleCopy("cssOutput")}>
					<Clipboard />
				</Button>
				<p>RGB {colord(rgbaString).toRgbString()}</p>
			</div>

			<div>
				<Button className={"shadow-none"} size="icon" variant={"outline"} onClick={() => handleCopy("cssOutput")}>
					<Clipboard />
				</Button>
				<p>HEX {colord(rgbaString).toHex()}</p>
			</div>

			<div>
				<Button className={"shadow-none"} size="icon" variant={"outline"} onClick={() => handleCopy("cssOutput")}>
					<Clipboard />
				</Button>
				<p>HSL {colord(rgbaString).toHslString()}</p>
			</div>

			<div>
				<Button className={"shadow-none"} size="icon" variant={"outline"} onClick={() => handleCopy("cssOutput")}>
					<Clipboard />
				</Button>
				<p>Name (closest) {colord(rgbaString).toName({ closest: true })}</p>
			</div>
		</div>
	);
}
