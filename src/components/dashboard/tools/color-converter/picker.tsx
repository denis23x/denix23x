"use client";

import { RgbaStringColorPicker } from "react-colorful";
import { useEffect, useMemo } from "react";
import { colord, random } from "colord";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import useStore from "@/stores/color-converter.store";

export default function Picker() {
	const { color, setColor } = useStore();

	const colorPicker: string = useMemo(() => (color.startsWith("rgba") ? color : colord(color).toRgbString()), [color]);

	useEffect(() => {
		setColor(random().toRgbString());
	}, []);

	return (
		<div className={"grid gap-2"}>
			<div className={"flex items-center gap-1"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"Color Picker"}>
					<Palette />
				</Button>
				<span className={"text-lg font-semibold"}>Color Picker</span>
			</div>
			<div className={"flex gap-4"}>
				<div className={"border border-input shadow-sm bg-muted/50 rounded-lg size-[200px]"}>
					<RgbaStringColorPicker color={colorPicker} onChange={setColor} />
				</div>
				<div className={"hidden sm:block overflow-hidden"}>
					<div className={"border border-input shadow-sm bg-muted/50 rounded-lg size-[200px] overflow-hidden"}>
						<div className={"size-full"} style={{ backgroundColor: color || "transparent" }}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
