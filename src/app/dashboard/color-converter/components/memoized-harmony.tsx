"use client";

import { memo } from "react";
import { Colord, colord, extend } from "colord";
import { Button } from "@/components/ui/button";
import { Blend } from "lucide-react";
import { handleCopy } from "@/lib/browser";
import harmonies from "colord/plugins/harmonies";

extend([harmonies]);

interface HarmonyProps {
	color: string;
	harmony: string;
}

export default memo(function MemoizedHarmony({ color, harmony }: HarmonyProps) {
	const map: Record<string, Record<string, string | string[]>> = {
		analogous: {
			label: "Analogous",
			output: colord(color)
				.harmonies("analogous")
				.map((c: Colord) => c.toHex()),
		},
		complementary: {
			label: "Complementary",
			output: colord(color)
				.harmonies("double-split-complementary")
				.map((c: Colord) => c.toHex()),
		},
		rectangle: {
			label: "Rectangle",
			output: colord(color)
				.harmonies("rectangle")
				.map((c: Colord) => c.toHex()),
		},
		tetradic: {
			label: "Tetradic",
			output: colord(color)
				.harmonies("tetradic")
				.map((c: Colord) => c.toHex()),
		},
		triadic: {
			label: "Triadic",
			output: colord(color)
				.harmonies("triadic")
				.map((c: Colord) => c.toHex()),
		},
	};

	return (
		<div className={"grid col-span-1 gap-2"}>
			<div className={"flex items-center gap-1"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"}>
					<Blend />
				</Button>
				<span className={"text-lg font-semibold"}>{map[harmony].label}</span>
			</div>
			<ul className={"flex items-center gap-1"}>
				{(map[harmony].output as string[]).map((hex: string, index: number) => (
					<li key={index}>
						<Button
							style={{ background: hex }}
							size={"icon"}
							variant={"outline"}
							onClick={() => handleCopy(hex)}
						></Button>
					</li>
				))}
			</ul>
		</div>
	);
});
