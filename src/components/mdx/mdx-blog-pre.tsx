"use client";

import { Clipboard } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes, RefObject, useRef } from "react";
import { handleCopy } from "@/lib/browser";
import { Button } from "@/components/ui/button";

export default function MdxBlogPre({
	children,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) {
	const preRef: RefObject<HTMLPreElement> = useRef<HTMLPreElement>(null);

	const handleClickCopy = () => {
		const code: string | null | undefined = preRef.current?.textContent;

		if (code) {
			handleCopy(code);
		}
	};

	return (
		<div className={"border border-input rounded-md"}>
			<Button
				variant={"ghost"}
				size="icon"
				aria-label={"Copy"}
				onClick={handleClickCopy}
				className="absolute top-2 right-2 z-10"
			>
				<Clipboard />
			</Button>
			<pre ref={preRef} {...props} className="relative">
				{children}
			</pre>
		</div>
	);
}
