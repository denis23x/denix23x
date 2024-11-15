"use client";

import { ChangeEvent } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Rabbit } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import useStore from "@/stores/useBlurHashImageStore";

export default function Optimization() {
	const { optimization, setOptimization } = useStore();

	return (
		<fieldset className={"grid col-span-1 gap-2"}>
			<Label className={"flex items-center gap-1"} htmlFor={"optimization-input"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"Optimization"}>
					<Rabbit />
				</Button>
				<span className={"text-lg font-semibold"}>Optimization</span>
			</Label>
			<Input
				className={"bg-sidebar rounded-b-sm h-11 pb-2"}
				type={"number"}
				id={"optimization-input"}
				value={optimization}
				min={1}
				onInput={(e: ChangeEvent<HTMLInputElement>) => setOptimization(Number(e.target.value))}
			/>
			<Slider
				className={"-mt-6 border border-transparent"}
				value={[optimization]}
				max={10}
				min={1}
				step={1}
				onValueChange={(e: number[]) => setOptimization(e[0])}
			/>
		</fieldset>
	);
}
