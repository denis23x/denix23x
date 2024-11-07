"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MoveHorizontal, MoveVertical } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";
import { Slider } from "@/components/ui/slider";
import useStore from "../store";

export default function PlaceholderSizes() {
	const { width, setWidth, height, setHeight } = useStore();

	return (
		<div className={"grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2"}>
			<fieldset className={"grid col-span-1 gap-2"}>
				<Label className={"flex items-center gap-1"} htmlFor={"width-input"}>
					<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"Width"}>
						<MoveHorizontal />
					</Button>
					<span className={"text-lg font-semibold"}>Width</span>
				</Label>
				<Input
					className={"bg-sidebar rounded-b-sm h-11 pb-2"}
					type={"number"}
					id={"width-input"}
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
					<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"Height"}>
						<MoveVertical />
					</Button>
					<span className={"text-lg font-semibold"}>Height</span>
				</Label>
				<Input
					className={"bg-sidebar rounded-b-sm h-11 pb-2"}
					type={"number"}
					id={"height-input"}
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
	);
}
