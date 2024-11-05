"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FileCode2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent } from "react";
import useStore from "@/app/dashboard/svg-to-css-encoder/store";

export default function SvgInput() {
	const { input, setInput } = useStore();

	return (
		<fieldset className={"grid w-full gap-2"}>
			<Label className={"flex items-center gap-1"} htmlFor={"svg-input"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"SVG Input"}>
					<FileCode2 />
				</Button>
				<span className={"text-lg font-semibold"}>SVG Input</span>
			</Label>
			<Textarea
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
