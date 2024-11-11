"use client";

import { Button } from "@/components/ui/button";
import { RefObject, useRef } from "react";
import { View } from "lucide-react";
import { rgbaToThumbHash, thumbHashToRGBA } from "thumbhash";
import Image from "next/image";
import useStore from "../store";

export default function ImageThumbHashPreview() {
	const imageRef: RefObject<HTMLImageElement> = useRef<HTMLImageElement>(null);
	const { image, setThumbHash, thumbHashDataURL, setThumbHashDataURL } = useStore();

	const handleEncode = () => {
		if (imageRef.current) {
			const maxWidth: number = 100;
			const maxHeight: number = 100;
			const aspectRatio: number = imageRef.current.naturalWidth / imageRef.current.naturalHeight;
			const width: number = Math.max(1, Math.round(aspectRatio > 1 ? maxWidth : maxHeight * aspectRatio));
			const height: number = Math.max(1, Math.round(aspectRatio > 1 ? maxWidth / aspectRatio : maxHeight));

			if (width > 0 && height > 0) {
				const canvas: HTMLCanvasElement = document.createElement("canvas");

				canvas.width = width;
				canvas.height = height;

				const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

				if (ctx) {
					ctx.drawImage(imageRef.current, 0, 0, width, height);

					const imageData: ImageData = ctx.getImageData(0, 0, width, height);
					const hash: Uint8Array = rgbaToThumbHash(imageData.width, imageData.height, imageData.data);

					// Encode
					setThumbHash(hash);

					const { w, h, rgba } = thumbHashToRGBA(hash);
					const canvas1: HTMLCanvasElement = document.createElement("canvas");

					canvas1.width = w;
					canvas1.height = h;

					const ctx1: CanvasRenderingContext2D | null = canvas1.getContext("2d");

					if (ctx1) {
						const imgData1: ImageData = ctx1.createImageData(w, h);
						imgData1.data.set(rgba);
						ctx1.putImageData(imgData1, 0, 0);
					}

					// Decode
					setThumbHashDataURL(canvas1.toDataURL());
				}
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
					{thumbHashDataURL && (
						<Image
							className={"object-contain aspect-square"}
							width={512}
							height={512}
							src={thumbHashDataURL}
							alt={"ThumbHash Preview"}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
