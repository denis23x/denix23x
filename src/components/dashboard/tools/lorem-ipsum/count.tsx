"use client";

import { Label } from "../../../ui/label";
import { Button } from "../../../ui/button";
import { Text } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { ChangeEvent } from "react";
import useStore from "@/stores/useLoremIpsumStore";

export default function Count() {
	const { loremCount, setLoremCount } = useStore();

	return (
		<fieldset className={"grid col-span-1 gap-2"}>
			<Label className={"flex items-center gap-1"} htmlFor={"count-input"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"Number"}>
					<Text />
				</Button>
				<span className={"text-lg font-semibold"}>Number</span>
			</Label>
			<Input
				className={"bg-sidebar rounded-b-sm h-11 pb-2"}
				type={"number"}
				id={"count-input"}
				value={loremCount}
				onInput={(e: ChangeEvent<HTMLInputElement>) => setLoremCount(Number(e.target.value))}
			/>
			<Slider
				className={"-mt-6 border border-transparent"}
				value={[loremCount]}
				max={32}
				min={1}
				step={1}
				onValueChange={(e: number[]) => setLoremCount(e[0])}
			/>
			<p className="text-sm text-muted-foreground">
				Number of <strong>words</strong>, <strong>sentences</strong>, or <strong>paragraphs</strong>
			</p>
		</fieldset>
	);
}
