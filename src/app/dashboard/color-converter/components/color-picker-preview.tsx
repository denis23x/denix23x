"use client";

import useStore from "@/app/dashboard/color-converter/store";

export default function ColorPickerPreview() {
	const { color } = useStore();

	return <div className={"size-full"} style={{ backgroundColor: color || "transparent" }}></div>;
}
