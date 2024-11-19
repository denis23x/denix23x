"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Scroll } from "lucide-react";
import { Textarea as Textarea1 } from "@/components/ui/textarea";
import { handleCopy } from "@/lib/browser";
import { useEffect } from "react";
import { faker } from "@faker-js/faker/locale/en";
import useStore from "@/stores/lorem-ipsum.store";

export default function Textarea() {
	const { loremCount, loremGenerate, loremIpsum, setLoremIpsum } = useStore();

	useEffect(() => {
		const generate = (count: number): string => {
			switch (loremGenerate) {
				case "generate-slug": {
					return faker.lorem.slug(count);
				}
				case "generate-words": {
					return faker.lorem.words(count);
				}
				case "generate-sentences": {
					return faker.lorem.sentences(count);
				}
				case "generate-paragraphs": {
					return faker.lorem.paragraphs(count);
				}
				case "generate-lines": {
					return faker.lorem.lines(count);
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
