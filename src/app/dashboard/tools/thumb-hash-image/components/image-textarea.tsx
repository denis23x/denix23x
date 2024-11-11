"use client";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Scroll } from "lucide-react";
import { handleCopy } from "@/lib/browser";
import { useEffect, useState } from "react";
import useStore from "../store";

export default function ImageTextarea() {
	const { thumbHashDataURL } = useStore();
	const [size, setSize] = useState<string>("0");

	useEffect(() => {
		const bytes = new TextEncoder().encode(thumbHashDataURL).length;

		setSize(String((bytes / 1024).toFixed(2)));
	}, [thumbHashDataURL]);

	return (
		<fieldset className={"grid w-full gap-2"}>
			<Label className={"flex items-center gap-1"} htmlFor={"data-url-output"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"Data URL"}>
					<Scroll />
				</Button>
				<span className={"text-lg font-semibold"}>{size}kb</span>
			</Label>
			<Textarea
				rows={8}
				className={"bg-sidebar mb-2 p-3"}
				id={"data-url-output"}
				value={thumbHashDataURL}
				readOnly={true}
			/>
			<Button variant={"outline"} onClick={() => handleCopy(thumbHashDataURL)} aria-label={"Copy Data URL"}>
				Copy Data URL
			</Button>
		</fieldset>
	);
}
