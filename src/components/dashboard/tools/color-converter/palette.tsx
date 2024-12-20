"use client";

import { useMemo } from "react";
import { colord, extend } from "colord";
import { Button } from "@/components/ui/button";
import { handleCopy } from "@/lib/browser";
import { SwatchBook } from "lucide-react";
import mix from "colord/plugins/mix";
import useStore from "@/stores/color-converter.store";

extend([mix]);

export default function Palette() {
	const { color } = useStore();

	const colorPalette: Record<string, string> = useMemo((): Record<string, string> => {
		const white: string = "#fff";
		const black: string = "#000";

		return {
			50: colord(color).mix(white, 0.9).desaturate(0.1).toHex(),
			100: colord(color).mix(white, 0.8).desaturate(0.1).toHex(),
			200: colord(color).mix(white, 0.6).desaturate(0.05).toHex(),
			300: colord(color).mix(white, 0.4).toHex(),
			400: colord(color).mix(white, 0.2).toHex(),
			500: colord(color).toHex(),
			600: colord(color).mix(black, 0.2).toHex(),
			700: colord(color).mix(black, 0.4).toHex(),
			800: colord(color).mix(black, 0.6).saturate(0.05).toHex(),
			900: colord(color).mix(black, 0.8).saturate(0.1).toHex(),
			950: colord(color).mix(black, 0.9).saturate(0.1).toHex(),
		};
	}, [color]);

	const colorContrast = (hex: string): string => {
		return colord(hex).isLight() ? "text-foreground dark:text-background" : "text-background dark:text-foreground";
	};

	return (
		<div className={"grid gap-2"}>
			<div className={"flex items-center gap-1"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"Color palette"}>
					<SwatchBook />
				</Button>
				<span className={"text-lg font-semibold"}>Color palette</span>
			</div>
			<ul className={"flex flex-wrap gap-2"}>
				{Object.keys(colorPalette).map((number: string) => (
					<li className={"flex flex-col items-center gap-2"} key={number}>
						<div
							className={"flex items-center justify-center rounded-md shadow border border-input size-14"}
							style={{ background: colorPalette[number] }}
						>
							<span className={`font-xs font-mono ${colorContrast(colorPalette[number])}`}>{number}</span>
						</div>
						<Button
							variant={"ghost"}
							className={"text-[10px] font-mono leading-none text-muted-foreground h-auto p-0"}
							aria-label={colorPalette[number]}
							onClick={() => handleCopy(colorPalette[number])}
						>
							{colorPalette[number]}
						</Button>
					</li>
				))}
			</ul>
		</div>
	);
}
