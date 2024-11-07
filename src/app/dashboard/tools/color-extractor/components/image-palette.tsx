"use client";

import { Button } from "@/components/ui/button";
import { handleCopy } from "@/lib/browser";
import { SwatchBook } from "lucide-react";
import useStore from "../store";

export default function ImagePalette() {
	const { imagePalette } = useStore();

	return (
		<div className={"grid gap-2"}>
			<div className={"flex items-center gap-1"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"Color palette"}>
					<SwatchBook />
				</Button>
				<span className={"text-lg font-semibold"}>Color palette</span>
			</div>
			<ul className={"flex flex-wrap gap-2"}>
				{imagePalette.map((hex: string, i: number) => (
					<li className={"flex flex-col items-center gap-2"} key={i}>
						<div
							className={"flex items-center justify-center rounded-md shadow border size-14"}
							style={{ background: hex }}
						></div>
						<Button
							variant={"ghost"}
							className={"text-[10px] font-mono leading-none text-muted-foreground h-auto p-0"}
							onClick={() => handleCopy(hex)}
							aria-label={hex}
						>
							{hex}
						</Button>
					</li>
				))}
			</ul>
		</div>
	);
}
