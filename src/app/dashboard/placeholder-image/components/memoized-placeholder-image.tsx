"use client";

import { useRef, useEffect, RefObject, memo } from "react";

interface PlaceholderImageProps {
	width: number;
	height: number;
	background: string;
	color: string;
	text: string;
	blob: (data: Blob | null) => void;
	dataURL: (data: string) => void;
}

export default memo(function MemoizedPlaceholderImage({
	width,
	height,
	background,
	color,
	text,
	blob,
	dataURL,
}: PlaceholderImageProps) {
	const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
	const imgRef: RefObject<HTMLImageElement> = useRef<HTMLImageElement>(null);

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
				ctx.fillText(text, width / 2, height / 2);

				// Convert canvas to data URL and set it as the image source
				image.src = canvas.toDataURL("image/png");

				// Emit
				canvas.toBlob((b: Blob | null) => blob(b));
				dataURL(image.src);
			}
		}
	}, [width, height, background, color, text, dataURL, blob]);

	return (
		<div className={"border rounded-lg overflow-hidden shadow-sm"}>
			<canvas className={"hidden"} ref={canvasRef} />
			<div className={"size-[256px]"}>
				<img
					className={"m-auto size-full object-contain"}
					ref={imgRef}
					alt={"Generated Placeholder"}
					width={width}
					height={height}
				/>
			</div>
		</div>
	);
});
