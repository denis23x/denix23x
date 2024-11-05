"use client";

import { ChangeEvent } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FileCode2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import useStore from "@/app/dashboard/color-converter/store";

export default function ColorPickerInput() {
	const { color, setColor } = useStore();

	return (
		<fieldset className={"grid gap-2"}>
			<Label className={"flex items-center gap-1"} htmlFor={"colorful-input"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"}>
					<FileCode2 />
				</Button>
				<span className={"text-lg font-semibold"}>Color Input</span>
			</Label>
			<Input
				className={"bg-sidebar"}
				type={"text"}
				id={"colorful-input"}
				placeholder={"HEX, RGB, HSL"}
				value={color}
				onInput={(e: ChangeEvent<HTMLInputElement>) => setColor(e.target.value)}
			/>
			<p className={"text-sm text-muted-foreground"}>Paste your color in any known format</p>
		</fieldset>
	);
}
