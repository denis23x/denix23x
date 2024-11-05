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

	return <RgbaStringColorPicker color={color} onChange={setColor} />;
}
