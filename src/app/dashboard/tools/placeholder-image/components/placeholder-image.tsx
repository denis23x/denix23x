"use client";

import { useRef, useEffect, RefObject } from "react";
import { useTheme } from "next-themes";
import useStore from "../store";

export default function PlaceholderImage() {
	const { text, width, height, background, setBackground, color, setColor, setCanvas } = useStore();
	const { theme, systemTheme } = useTheme();

	const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
	const imgRef: RefObject<HTMLImageElement> = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const isDark: boolean = theme === "dark" || (theme === "system" && systemTheme === "dark");

		setColor(isDark ? "#fafafa" : "#09090b");
		setBackground(isDark ? "#18181b" : "#fafafa");
	}, [theme, systemTheme]);

	useEffect(() => {
		const canvas: HTMLCanvasElement | null = canvasRef.current;
		const image: HTMLImageElement | null = imgRef.current;

		if (canvas && image) {
			const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

			if (ctx) {
				// Set canvas dimensions
				canvas.width = width;
				canvas.height = height;

				// Fill background color
				ctx.fillStyle = background;
				ctx.fillRect(0, 0, width, height);

				// Set text properties and add text
				ctx.fillStyle = color;
				ctx.font = `${Math.min(width, height) / 7.5}px Arial`;
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText(text || `${width}x${height}`, width / 2, height / 2);

				// Convert canvas to data URL and set it as the image source
				image.src = canvas.toDataURL("image/png");

				// Store
				setCanvas(canvas);
			}
		}
	}, [width, height, background, color, text]);

	return (
		<div className={"border rounded-lg overflow-hidden shadow-sm size-[256px]"}>
			<canvas className={"hidden"} ref={canvasRef} />
			<img
				className={"m-auto size-full object-contain aspect-square"}
				ref={imgRef}
				alt={"Generated Placeholder"}
				width={width}
				height={height}
			/>
		</div>
	);
}
