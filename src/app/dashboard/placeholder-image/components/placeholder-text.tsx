"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Type } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";
import useStore from "@/app/dashboard/placeholder-image/store";

export default function PlaceholderText() {
	const { width, height, text, setText } = useStore();

	return (
		<fieldset className={"grid gap-2"}>
			<Label className={"flex items-center gap-1"} htmlFor={"placeholder-input"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"Placeholder"}>
					<Type />
				</Button>
				<span className={"text-lg font-semibold"}>Placeholder</span>
			</Label>
			<Input
				className={"bg-sidebar"}
				type={"text"}
				id={"placeholder-input"}
				placeholder={`${width}x${height}`}
				value={text}
				onInput={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
			/>
		</fieldset>
	);
}
