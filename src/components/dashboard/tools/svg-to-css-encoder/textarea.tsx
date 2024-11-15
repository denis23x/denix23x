"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FileImage } from "lucide-react";
import { Textarea as Textarea1 } from "@/components/ui/textarea";
import { ChangeEvent } from "react";
import useStore from "@/stores/svg-to-css-encoder.store";

export default function Textarea() {
	const { input, setInput } = useStore();

	return (
		<fieldset className={"grid w-full gap-2"}>
			<Label className={"flex items-center gap-1"} htmlFor={"svg-input"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"SVG Input"}>
					<FileImage />
				</Button>
				<span className={"text-lg font-semibold"}>SVG Input</span>
			</Label>
			<Textarea1
				rows={8}
				className={"bg-sidebar p-3"}
				id={"svg-input"}
				placeholder={"Paste your SVG code"}
				value={input}
				onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
			/>
		</fieldset>
	);
}
