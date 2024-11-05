"use client";

import { Button } from "@/components/ui/button";
import { Clipboard } from "lucide-react";
import { codeToHtml } from "shiki";
import { useState } from "react";
import { handleCopy } from "@/lib/browser";

interface AppHighlightProps {
	title: string;
	language: string;
	code: string;
}

export function AppHighlight({ title, language, code }: AppHighlightProps) {
	const [highlight, setHighlight] = useState<string>("");

	codeToHtml(code, {
		lang: language,
		themes: {
			light: "github-light",
			dark: "github-dark",
		},
	}).then((html: string) => setHighlight(html));

	return (
		<section className={"border shadow-sm rounded-xl overflow-hidden"}>
			<header className={"grid grid-cols-2 bg-sidebar border-b py-2 px-3"}>
				<div className={"col-span-1 text-sm text-muted-foreground"}>
					<i>{title}</i>
				</div>
				<ul className={"col-span-1 flex items-center justify-end gap-2 opacity-25"}>
					<li className={"block size-2.5 rounded-full bg-foreground"}></li>
					<li className={"block size-2.5 rounded-full bg-foreground"}></li>
					<li className={"block size-2.5 rounded-full bg-foreground"}></li>
				</ul>
			</header>
			<div className={"text-xs relative min-h-16"}>
				<Button className={"absolute right-3 top-3"} size="icon" variant={"outline"} onClick={() => handleCopy(code)}>
					<Clipboard />
				</Button>
				<div dangerouslySetInnerHTML={{ __html: highlight }}></div>
			</div>
		</section>
	);
}
