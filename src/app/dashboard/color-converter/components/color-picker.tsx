"use client";

import { RgbaStringColorPicker } from "react-colorful";
import { useEffect } from "react";
import { random } from "colord";
import useStore from "@/app/dashboard/color-converter/store";

export default function ColorPicker() {
	const { color, setColor } = useStore();

	useEffect(() => {
		setColor(random().toRgbString());
	}, []);

	return (
		<div className={"flex gap-4"}>
			<div className={"border shadow-sm bg-muted/50 rounded-lg size-[200px]"}>
				<RgbaStringColorPicker color={color} onChange={setColor} />
			</div>
			<div className={"border shadow-sm bg-muted/50 rounded-lg size-[200px] hidden sm:block overflow-hidden"}>
				<div className={"size-full"} style={{ backgroundColor: color || "transparent" }}></div>
			</div>
		</div>
	);
}
