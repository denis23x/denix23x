"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Text } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import useStore from "@/app/dashboard/markdown-renderer/store";

export default function MarkdownOutput() {
	const { output } = useStore();

	return (
		<fieldset className={"grid w-full gap-2"}>
			<Label className={"flex items-center gap-1"} htmlFor={"markdown-output"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"Markdown Output"}>
					<Text />
				</Button>
				<span className={"text-lg font-semibold"}>Output</span>
			</Label>
			<Textarea
				className={"bg-sidebar p-3"}
				id={"markdown-output"}
				rows={8}
				placeholder={"Markdown Output"}
				value={output}
				readOnly={true}
			/>
		</fieldset>
	);
}
