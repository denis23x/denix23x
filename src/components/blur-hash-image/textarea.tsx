"use client";

import { Textarea as Textarea1 } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Scroll } from "lucide-react";
import { handleCopy } from "@/lib/browser";
import { useEffect, useState } from "react";
import useStore from "@/stores/useBlurHashImageStore";

export default function Textarea() {
	const { blurHashDataURL } = useStore();
	const [size, setSize] = useState<string>("0");

	useEffect(() => {
		const bytes = new TextEncoder().encode(blurHashDataURL).length;

		setSize(String((bytes / 1024).toFixed(2)));
	}, [blurHashDataURL]);

	return (
		<fieldset className={"grid w-full gap-2"}>
			<Label className={"flex items-center gap-1"} htmlFor={"data-url-output"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"Data URL"}>
					<Scroll />
				</Button>
				<span className={"text-lg font-semibold"}>{size}kb</span>
			</Label>
			<Textarea1
				rows={8}
				className={"bg-sidebar mb-2 p-3"}
				id={"data-url-output"}
				value={blurHashDataURL}
				readOnly={true}
			/>
			<Button variant={"outline"} onClick={() => handleCopy(blurHashDataURL)} aria-label={"Copy Data URL"}>
				Copy Data URL
			</Button>
		</fieldset>
	);
}
