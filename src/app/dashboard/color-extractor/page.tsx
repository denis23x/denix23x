"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileImage, View, SwatchBook } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { extractColors } from "extract-colors";
import { FinalColor } from "extract-colors/lib/types/Color";
import { toast } from "sonner";
import { handleCopy } from "@/lib/browser";
import { FastAverageColor, FastAverageColorResult } from "fast-average-color";
import Image from "next/image";
import superman from "../../../../public/images/superman.png";

export default function Page() {
	const [image, setImage] = useState<string | ArrayBuffer | null>(null);
	const [imageColors, setImageColors] = useState<FinalColor[]>([]);
	const [imageAverage, setImageAverage] = useState<FastAverageColorResult | null>(null);

	const fastAverageColor: FastAverageColor = new FastAverageColor();

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const file: File | null | undefined = e.target.files?.item(0);

		if (file) {
			const reader: FileReader = new FileReader();

			reader.onload = () => setImage(reader.result);
			reader.readAsDataURL(file);
		}
	};

	useEffect(() => {
		const output: HTMLImageElement | null = document.querySelector("img#file-output");
		const frame: HTMLImageElement | null = document.querySelector("img#file-frame");

		if (output) {
			extractColors(output)
				.then((finalColors: FinalColor[]) => setImageColors(finalColors))
				.catch(() => toast.error("Failed to extract"));
		}

		if (frame) {
			fastAverageColor
				.getColorAsync(frame)
				.then((fastAverageColorResult: FastAverageColorResult) => setImageAverage(fastAverageColorResult))
				.catch(() => toast.error("Failed to extract"));
		}
	}, [image, fastAverageColor]);

	useEffect(() => {
		setImage(superman.src);
	}, []);

	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>Color Extractor</h1>
			<p className={"leading-7"}>
				This tool creates a color palette from any image, including an average hue, offering a fast way to apply the
				visual theme of an image to various UI components. It helps designers maintain visual consistency, enabling the
				creation of custom color schemes that align with the overall aesthetic of the image.
			</p>
			<Separator />
			<div className={"flex items-stretch flex-wrap gap-4"}>
				<div className={"grid gap-2"}>
					<div className={"flex items-center gap-1"}>
						<Button className={"size-7"} variant={"ghost"} size={"icon"}>
							<View />
						</Button>
						<span className={"text-lg font-semibold"}>Preview</span>
					</div>
					<div className={"flex flex-wrap gap-4"}>
						<div className={"border shadow-sm bg-muted/50 rounded-lg size-[200px] overflow-hidden"}>
							{image && (
								<Image
									className={"size-full object-cover"}
									id={"file-output"}
									width={512}
									height={512}
									src={String(image)}
									alt={"Preview"}
								/>
							)}
						</div>
						<div
							className={"border shadow-sm bg-muted/50 rounded-lg size-[200px] p-12"}
							style={{ backgroundColor: imageAverage?.hexa }}
						>
							{image && (
								<div className={"flex flex-col items-center gap-2"}>
									<Image
										className={"size-full object-cover rounded-lg"}
										id={"file-frame"}
										width={512}
										height={512}
										src={String(image)}
										alt={"Average Color"}
									/>
									<Button
										variant={"link"}
										className={`mx-auto font-mono text-sm h-auto p-0 transition-none ${imageAverage?.isLight ? "text-foreground dark:text-background" : "text-background dark:text-foreground"}`}
										onClick={() => handleCopy(String(imageAverage?.hexa))}
									>
										{imageAverage?.hexa}
									</Button>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className={"grid gap-2"}>
					<fieldset className={"grid gap-2"}>
						<Label className={"flex items-center gap-1"} htmlFor={"file-input"}>
							<Button className={"size-7"} variant={"ghost"} size={"icon"}>
								<FileImage />
							</Button>
							<span className={"text-lg font-semibold"}>File Input</span>
						</Label>
						<Input
							className={"bg-sidebar pt-1.5"}
							type={"file"}
							id={"file-input"}
							accept={"image/png, image/jpeg, image/webp"}
							onInput={handleInput}
						/>
						<p className={"text-sm text-muted-foreground"}>
							Only <strong>.png</strong> or <strong>.jpeg</strong> or <strong>.webp</strong> is acceptable
						</p>
					</fieldset>
					<div className={"grid gap-2"}>
						<div className={"flex items-center gap-1"}>
							<Button className={"size-7"} variant={"ghost"} size={"icon"}>
								<SwatchBook />
							</Button>
							<span className={"text-lg font-semibold"}>Color palette</span>
						</div>
						<ul className={"flex flex-wrap gap-2"}>
							{imageColors.map((finalColor: FinalColor, index: number) => (
								<li className={"flex flex-col items-center gap-2"} key={index}>
									<div
										className={"flex items-center justify-center rounded-md shadow border size-14"}
										style={{ background: finalColor.hex }}
									></div>
									<Button
										variant={"ghost"}
										className={"text-[10px] font-mono leading-none text-muted-foreground h-auto p-0"}
										onClick={() => handleCopy(finalColor.hex)}
									>
										{finalColor.hex}
									</Button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
