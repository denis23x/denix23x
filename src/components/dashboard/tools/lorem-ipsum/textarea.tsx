"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Scroll } from "lucide-react";
import { Textarea as Textarea1 } from "@/components/ui/textarea";
import { handleCopy } from "@/lib/browser";
import { LoremIpsum } from "lorem-ipsum";
import { useEffect } from "react";
import useStore from "@/stores/useLoremIpsumStore";

export default function Textarea() {
	const { loremCount, loremGenerate, loremIpsum, setLoremIpsum } = useStore();

	const lorem: LoremIpsum = new LoremIpsum({
		sentencesPerParagraph: {
			max: 8,
			min: 4,
		},
		wordsPerSentence: {
			max: 16,
			min: 4,
		},
	});

	useEffect(() => {
		const generate = (count: number): string => {
			switch (loremGenerate) {
				case "generate-words": {
					return lorem.generateWords(count);
				}
				case "generate-sentences": {
					return lorem.generateSentences(count);
				}
				case "generate-paragraphs": {
					return lorem.generateParagraphs(count);
				}
				default: {
					throw new Error("Invalid generate context specified");
				}
			}
		};

		setLoremIpsum(generate(loremCount));
	}, [loremGenerate, loremCount]);

	return (
		<fieldset className={"grid w-full gap-2"}>
			<Label className={"flex items-center gap-1"} htmlFor={"lorem-ipsum-output"}>
				<Button className={"size-7"} variant={"ghost"} size={"icon"} aria-label={"Lorem Ipsum"}>
					<Scroll />
				</Button>
				<span className={"text-lg font-semibold"}>Lorem Ipsum</span>
			</Label>
			<Textarea1
				rows={10}
				className={"bg-sidebar mb-2 p-3"}
				id={"lorem-ipsum-output"}
				value={loremIpsum}
				readOnly={true}
			/>
			<Button variant={"outline"} onClick={() => handleCopy(loremIpsum)} aria-label={"Copy Lorem Ipsum"}>
				Copy Lorem Ipsum
			</Button>
		</fieldset>
	);
}
