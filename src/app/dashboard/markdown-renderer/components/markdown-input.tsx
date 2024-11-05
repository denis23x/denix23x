"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Text } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent } from "react";
import useStore from "@/app/dashboard/markdown-renderer/store";

export default function MarkdownInput() {
	const { input, setInput } = useStore();

	return (
		<fieldset className={"grid w-full gap-2"}>
			<Label className={"flex items-center gap-1"} htmlFor={"markdown-input"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"Markdown Input"}>
					<Text />
				</Button>
				<span className={"text-lg font-semibold"}>Input</span>
			</Label>
			<Textarea
				rows={8}
				className={"bg-sidebar p-3"}
				id={"markdown-input"}
				placeholder={"Type Markdown"}
				value={input}
				onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
			/>
		</fieldset>
	);
}
