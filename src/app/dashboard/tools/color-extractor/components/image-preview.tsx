"use client";

import { Button } from "@/components/ui/button";
import { Colord, colord } from "colord";
import { handleCopy } from "@/lib/browser";
import { RefObject, useRef } from "react";
import { View } from "lucide-react";
import ColorThief from "colorthief";
import Image from "next/image";
import useStore from "../store";

export default function ImagePreview() {
	const imageRef: RefObject<HTMLImageElement> = useRef<HTMLImageElement>(null);
	const { image, imageColor, setImageColor, setImagePalette } = useStore();

	const colorThief = new ColorThief();
	const colorParseRGB = (rgb: number[]): Colord => colord(`rgb(${rgb.join(",")})`);

	const handleLoad = () => {
		if (imageRef.current) {
			const img: HTMLImageElement = imageRef.current;

			if (img.complete) {
				setImagePalette(colorThief.getPalette(img).map((rgb: number[]) => colorParseRGB(rgb).toHex()));
				setImageColor(colorParseRGB(colorThief.getColor(img)).toHex());
			} else {
				img.addEventListener("load", () => {
					setImagePalette(colorThief.getPalette(img).map((rgb: number[]) => colorParseRGB(rgb).toHex()));
					setImageColor(colorParseRGB(colorThief.getColor(img)).toHex());
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
				<div className={"border border-input shadow-sm bg-muted/50 rounded-lg size-[200px] overflow-hidden"}>
					{image && (
						<Image
							ref={imageRef}
							className={"size-full object-cover"}
							width={512}
							height={512}
							onLoad={handleLoad}
							src={image as string}
							alt={"Preview"}
						/>
					)}
				</div>
				<div
					className={"border border-input shadow-sm bg-muted/50 rounded-lg size-[200px]"}
					style={{ backgroundColor: imageColor }}
				>
					{image && (
						<div className={"flex flex-col items-center justify-center gap-2 size-full relative"}>
							<Image
								className={"object-cover rounded-lg size-[100px]"}
								width={512}
								height={512}
								src={image as string}
								alt={"Average Color"}
							/>
							<Button
								variant={"link"}
								className={`mx-auto font-mono text-sm h-auto p-0 transition-none absolute bottom-4 ${colord(imageColor).isLight() ? "text-foreground dark:text-background" : "text-background dark:text-foreground"}`}
								onClick={() => handleCopy(imageColor)}
								aria-label={imageColor}
							>
								{imageColor}
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
