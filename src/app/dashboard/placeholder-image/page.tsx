"use client";

import MemoizedPlaceholderImage from "./components/memoized-placeholder-image";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MoveHorizontal, MoveVertical, PaintBucket, Type } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HexColorPicker } from "react-colorful";
import { handleDownload as handleDownloadBrowser, handleShare } from "@/lib/browser";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";

export default function Page() {
	const { theme, systemTheme } = useTheme();
	const [placeholder, setPlaceholder] = useState<string>("");
	const [width, setWidth] = useState<number>(512);
	const [height, setHeight] = useState<number>(512);
	const [color, setColor] = useState<string>("transparent");
	const [background, setBackground] = useState<string>("transparent");
	const isMobile: boolean = useIsMobile();

	useEffect(() => {
		const isDark: boolean = theme === "dark" || (theme === "system" && systemTheme === "dark");

		setColor(isDark ? "#fafafa" : "#09090b");
		setBackground(isDark ? "#18181b" : "#fafafa");
	}, [theme, systemTheme]);

	let imageDataURL: string;
	let imageBlob: Blob | null;

	const handleDownload = () => {
		const name: string = `${placeholder || `${width}x${height}`}.png`;

		if (isMobile) {
			if (imageBlob) {
				const shareFile: File = new File([imageBlob], name, {
					type: imageBlob.type,
				});

				const shareData: ShareData = {
					files: [shareFile],
				};

				handleShare(shareData);
			}
		} else {
			handleDownloadBrowser(imageDataURL, name);
		}
	};

	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>Placeholder Image</h1>
			<p className={"leading-7"}>
				This tool helps developers create customizable placeholder images for use in web and app development. By
				generating placeholder images with specific dimensions, colors, and text, it enables quick visualization and
				layout testing without relying on actual content.
			</p>
			<Separator />
			<div className={"flex flex-col lg:flex-row items-stretch gap-4"}>
				<div className={"flex col-span-1"}>
					<MemoizedPlaceholderImage
						width={width}
						height={height}
						background={background}
						color={color}
						text={placeholder || `${width}x${height}`}
						dataURL={(e: string) => (imageDataURL = e)}
						blob={(e: Blob | null) => (imageBlob = e)}
					/>
				</div>
				<div className={"flex flex-1 flex-col col-span-1 gap-3"}>
					<fieldset className={"grid gap-2"}>
						<Label className={"flex items-center gap-1"} htmlFor={"placeholder-input"}>
							<Button className={"size-7"} variant={"ghost"} size={"icon"}>
								<Type />
							</Button>
							<span className={"text-lg font-semibold"}>Placeholder</span>
						</Label>
						<Input
							className={"bg-sidebar"}
							type={"text"}
							id={"placeholder-input"}
							placeholder={`${width}x${height}`}
							value={placeholder}
							onInput={(e: ChangeEvent<HTMLInputElement>) => setPlaceholder(e.target.value)}
						/>
					</fieldset>
					<div className={"grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 my-auto"}>
						<fieldset className={"grid col-span-1 gap-2"}>
							<Label className={"flex items-center gap-1"} htmlFor={"width-input"}>
								<Button className={"size-7"} variant={"ghost"} size={"icon"}>
									<MoveHorizontal />
								</Button>
								<span className={"text-lg font-semibold"}>Width</span>
							</Label>
							<Input
								className={"bg-sidebar rounded-b-sm h-11 pb-2"}
								type={"number"}
								id={"width-input"}
								placeholder={"Width"}
								value={width}
								onInput={(e: ChangeEvent<HTMLInputElement>) => setWidth(Number(e.target.value))}
							/>
							<Slider
								className={"-mt-6 border border-transparent"}
								value={[width]}
								max={2048}
								min={128}
								step={128}
								onValueChange={(e: number[]) => setWidth(e[0])}
							/>
						</fieldset>
						<fieldset className={"grid col-span-1 gap-2"}>
							<Label className={"flex items-center gap-1"} htmlFor={"height-input"}>
								<Button className={"size-7"} variant={"ghost"} size={"icon"}>
									<MoveVertical />
								</Button>
								<span className={"text-lg font-semibold"}>Height</span>
							</Label>
							<Input
								className={"bg-sidebar rounded-b-sm h-11 pb-2"}
								type={"number"}
								id={"height-input"}
								placeholder={"Height"}
								value={height}
								onInput={(e: ChangeEvent<HTMLInputElement>) => setHeight(Number(e.target.value))}
							/>
							<Slider
								className={"-mt-6 border border-transparent"}
								value={[height]}
								max={2048}
								min={128}
								step={128}
								onValueChange={(e: number[]) => setHeight(e[0])}
							/>
						</fieldset>
					</div>
					<div className={"grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2"}>
						<fieldset className={"grid col-span-1 gap-2"}>
							<Label className={"flex items-center gap-1"} htmlFor={"background-input"}>
								<Button className={"size-7"} variant={"ghost"} size={"icon"}>
									<PaintBucket />
								</Button>
								<span className={"text-lg font-semibold"}>Background</span>
							</Label>
							<div className={"flex gap-2"}>
								<Input
									className={"bg-sidebar flex-1"}
									type={"text"}
									id={"background-input"}
									placeholder={"Background"}
									value={background}
									onChange={(e: ChangeEvent<HTMLInputElement>) => setBackground(e.target.toString)}
								/>
								<Popover>
									<PopoverTrigger asChild>
										<Button size="icon" variant={"outline"} style={{ background }}></Button>
									</PopoverTrigger>
									<PopoverContent className={"w-auto"}>
										<HexColorPicker color={background} onChange={setBackground} />
									</PopoverContent>
								</Popover>
							</div>
						</fieldset>
						<fieldset className={"grid col-span-1 gap-2"}>
							<Label className={"flex items-center gap-1"} htmlFor={"color-input"}>
								<Button className={"size-7"} variant={"ghost"} size={"icon"}>
									<PaintBucket />
								</Button>
								<span className={"text-lg font-semibold"}>Color</span>
							</Label>
							<div className={"flex gap-2"}>
								<Input
									className={"bg-sidebar flex-1"}
									type={"text"}
									id={"color-input"}
									placeholder={"Color"}
									value={color}
									onChange={(e: ChangeEvent<HTMLInputElement>) => setColor(e.target.toString)}
								/>
								<Popover>
									<PopoverTrigger asChild>
										<Button size="icon" variant={"outline"} style={{ background: color }}></Button>
									</PopoverTrigger>
									<PopoverContent className={"w-auto"}>
										<HexColorPicker color={color} onChange={setColor} />
									</PopoverContent>
								</Popover>
							</div>
						</fieldset>
					</div>
				</div>
			</div>
			<Button variant={"outline"} onClick={handleDownload}>
				Download Placeholder Image
			</Button>
		</div>
	);
}
