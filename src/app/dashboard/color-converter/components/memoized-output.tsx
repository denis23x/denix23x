"use client";

import { memo } from "react";
import { colord, extend } from "colord";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Clipboard, FileCode2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { handleCopy } from "@/lib/browser";
import cmykPlugin from "colord/plugins/cmyk";
import namesPlugin from "colord/plugins/names";
import lchPlugin from "colord/plugins/lch";
import hwbPlugin from "colord/plugins/hwb";

extend([cmykPlugin, lchPlugin, hwbPlugin, namesPlugin]);

interface OutputProps {
	color: string;
	model: string;
}

export default memo(function MemoizedOutput({ color, model }: OutputProps) {
	const map: Record<string, Record<string, string>> = {
		rgba: {
			label: "RGB",
			output: colord(color).toRgbString(),
		},
		hex: {
			label: "HEX",
			output: colord(color).toHex(),
		},
		hsl: {
			label: "HSL",
			output: colord(color).toHslString(),
		},
		cmyk: {
			label: "CMYK",
			output: colord(color).toCmykString(),
		},
		lch: {
			label: "LCH",
			output: colord(color).toLchString(),
		},
		hwb: {
			label: "HWB",
			output: colord(color).toHwbString(),
		},
		name: {
			label: "Name (approximately)",
			output: colord(color).toName({ closest: true }) as string,
		},
	};

	return (
		<fieldset className={"grid col-span-1 gap-2"}>
			<Label className={"flex items-center gap-1"} htmlFor={`${model}-output`}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"}>
					<FileCode2 />
				</Button>
				<span className={"text-lg font-semibold"}>{map[model].label}</span>
			</Label>
			<div className={"flex items-center gap-2"}>
				<Input
					className={"bg-sidebar flex-1"}
					type={"text"}
					id={`${model}-output`}
					placeholder={`${map[model].label} Output`}
					value={map[model].output}
					readOnly={true}
				/>
				<Button size="icon" variant={"outline"} onClick={() => handleCopy(map[model].output)}>
					<Clipboard />
				</Button>
			</div>
		</fieldset>
	);
});
