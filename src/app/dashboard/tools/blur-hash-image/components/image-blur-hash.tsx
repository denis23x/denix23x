"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Clipboard, Code } from "lucide-react";
import { Input } from "@/components/ui/input";
import { handleCopy } from "@/lib/browser";
import useStore from "../store";

export default function ImageBlurHash() {
	const { blurHash } = useStore();

	return (
		<fieldset className={"grid col-span-1 gap-2"}>
			<Label className={"flex items-center gap-1"} htmlFor={"blur-hash-output"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"BlurHash"}>
					<Code />
				</Button>
				<span className={"text-lg font-semibold"}>BlurHash</span>
			</Label>
			<div className={"flex items-center gap-2"}>
				<Input className={"bg-sidebar"} id={"blur-hash-output"} value={blurHash} readOnly={true} />
				<Button size="icon" variant={"outline"} onClick={() => handleCopy(blurHash)} aria-label={"Copy BlurHash"}>
					<Clipboard />
				</Button>
			</div>
		</fieldset>
	);
}
