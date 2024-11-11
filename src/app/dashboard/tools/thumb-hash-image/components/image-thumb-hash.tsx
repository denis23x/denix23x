"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Clipboard, Code } from "lucide-react";
import { Input } from "@/components/ui/input";
import { handleCopy } from "@/lib/browser";
import useStore from "../store";

export default function ImageThumbHash() {
	const { thumbHash } = useStore();

	return (
		<fieldset className={"grid col-span-1 gap-2"}>
			<Label className={"flex items-center gap-1"} htmlFor={"thumb-hash-output"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"ThumbHash"}>
					<Code />
				</Button>
				<span className={"text-lg font-semibold"}>ThumbHash</span>
			</Label>
			<div className={"flex items-center gap-2"}>
				<Input className={"bg-sidebar"} id={"thumb-hash-output"} value={String(thumbHash)} readOnly={true} />
				<Button
					size="icon"
					variant={"outline"}
					onClick={() => handleCopy(String(thumbHash))}
					aria-label={"Copy ThumbHash"}
				>
					<Clipboard />
				</Button>
			</div>
		</fieldset>
	);
}
