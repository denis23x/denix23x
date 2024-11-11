"use client";

import { Button } from "@/components/ui/button";
import { MutableRefObject, RefObject, useEffect, useRef, useState } from "react";
import { View } from "lucide-react";
import { decode, encode } from "blurhash";
import { useDebounce } from "use-debounce";
import Image from "next/image";
import useStore from "../store";

export default function ImageBlurHashPreview() {
	const imageRef: RefObject<HTMLImageElement> = useRef<HTMLImageElement>(null);
	const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
	const { image, optimization, blurHash, setBlurHash, setBlurHashDataURL } = useStore();
	const [width, setWidth] = useState<number>(256);
	const [height, setHeight] = useState<number>(256);
	const [optimizationDebounce] = useDebounce<number>(optimization, 300);
	const hasMounted: MutableRefObject<boolean> = useRef(false);

	const handleLoad = () => {
		if (imageRef.current) {
			if (imageRef.current.complete) {
				handleEncode();
			} else {
				imageRef.current.addEventListener("load", () => handleEncode());
			}
		}
	};

	const handleEncode = () => {
		if (imageRef.current) {
			setWidth(Math.round(imageRef.current.naturalWidth / optimization));
			setHeight(Math.round(imageRef.current.naturalHeight / optimization));

			const canvas: HTMLCanvasElement = document.createElement("canvas");

			canvas.width = width;
			canvas.height = height;

			const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

			if (ctx) {
				ctx.drawImage(imageRef.current, 0, 0, width, height);

				// Get the resized image data and pass it to BlurHash
				const imageData = ctx.getImageData(0, 0, width, height);
				const componentsX: number = 4; // Recommended values for BlurHash encoding
				const componentsY: number = 4;
				const hash: string = encode(imageData.data, imageData.width, imageData.height, componentsX, componentsY);

				// Encode
				setBlurHash(hash);
			}
		}
	};

	useEffect(() => {
		if (canvasRef.current && blurHash) {
			const pixels = decode(blurHash, width, height, 1);
			const canvas = canvasRef.current;
			const ctx = canvas.getContext("2d");

			if (ctx) {
				console.log(width);

				const imageData = ctx.createImageData(width, height);
				imageData.data.set(pixels);
				ctx.putImageData(imageData, 0, 0);

				setBlurHashDataURL(canvas.toDataURL());
			}
		}
	}, [blurHash]);

	useEffect(() => {
		if (!hasMounted.current) {
			hasMounted.current = true;
			return;
		}

		handleEncode();
	}, [optimizationDebounce]);

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
						className={"object-contain aspect-square"}
						id={"file-output"}
						width={512}
						height={512}
						onLoad={handleLoad}
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
