"use client";

import { Button } from "@/components/ui/button";
import { RefObject, useEffect, useRef, useState } from "react";
import { View } from "lucide-react";
import { decode, encode } from "blurhash";
import { useDebounce } from "use-debounce";
import Image from "next/image";
import useStore from "@/stores/blur-hash-image.store";

export default function BlurHashPreview() {
	const imageRef: RefObject<HTMLImageElement> = useRef<HTMLImageElement>(null);
	const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
	const { image, optimization, blurHash, setBlurHash, setBlurHashDataURL } = useStore();
	const [width, setWidth] = useState<number>(256);
	const [height, setHeight] = useState<number>(256);
	const [optimizationDebounce] = useDebounce(optimization, 400);

	useEffect(() => {
		if (imageRef.current) {
			if (imageRef.current.complete) {
				if (blurHash) {
					handleEncode();
				}
			}
		}
	}, [optimizationDebounce]);

	const handleEncode = () => {
		if (imageRef.current) {
			const w: number = imageRef.current.naturalWidth;
			const h: number = imageRef.current.naturalHeight;

			const wOptimized: number = optimization ? Math.round(w / optimization) : w;
			const hOptimized: number = optimization ? Math.round(h / optimization) : h;

			setWidth(wOptimized);
			setHeight(hOptimized);

			const canvas: HTMLCanvasElement = document.createElement("canvas");

			canvas.width = wOptimized;
			canvas.height = hOptimized;

			const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

			if (ctx) {
				ctx.drawImage(imageRef.current, 0, 0, wOptimized, hOptimized);

				// Get the resized image data and pass it to BlurHash
				const imageData: ImageData = ctx.getImageData(0, 0, wOptimized, hOptimized);
				const componentsX: number = 4; // Recommended values for BlurHash encoding
				const componentsY: number = 4;
				const hash: string = encode(imageData.data, imageData.width, imageData.height, componentsX, componentsY);

				// BlurHash
				setBlurHash(hash);

				// DataURL
				setTimeout(() => {
					if (canvasRef.current) {
						const pixels: Uint8ClampedArray = decode(hash, wOptimized, hOptimized, 1);
						const canvas1: HTMLCanvasElement = canvasRef.current;
						const ctx1: CanvasRenderingContext2D | null = canvas1.getContext("2d");

						if (ctx1) {
							const imageData1: ImageData = ctx1.createImageData(wOptimized, hOptimized);
							imageData1.data.set(pixels);
							ctx1.putImageData(imageData1, 0, 0);

							setBlurHashDataURL(canvas1.toDataURL());
						}
					}
				});
			}
		}
	};

	return (
		<div className={"grid gap-2"}>
			<div className={"flex items-center gap-1"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"Preview"}>
					<View />
				</Button>
				<span className={"text-lg font-semibold"}>Preview</span>
			</div>
			<div className={"flex flex-wrap gap-4"}>
				<div className={"border border-input shadow-sm bg-muted/50 rounded-lg size-[256px] overflow-hidden"}>
					<Image
						ref={imageRef}
						priority={true}
						className={"object-contain aspect-square"}
						width={512}
						height={512}
						onLoad={handleEncode}
						src={image as string}
						alt={"Preview"}
					/>
				</div>
				<div className={"border border-input shadow-sm bg-muted/50 rounded-lg size-[256px] overflow-hidden"}>
					<div className={"flex items-center justify-center size-full"}>
						<canvas
							className={`${height > width ? "h-full w-auto" : "h-auto w-full"}`}
							ref={canvasRef}
							width={width}
							height={height}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
