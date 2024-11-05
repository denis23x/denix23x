"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Scroll, Text } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { LoremIpsum } from "lorem-ipsum";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { handleCopy } from "@/lib/browser";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
	const [loremCount, setLoremCount] = useState<number>(4);
	const [loremGenerate, setLoremGenerate] = useState<string>("generate-sentences");
	const [loremIpsum, setLoremIpsum] = useState<string>("");

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
	}, [loremGenerate, loremCount]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>Lorem Ipsum</h1>
			<p className={"leading-7"}>
				This tool generates placeholder <i>Lorem Ipsum</i> text, providing customizable dummy text for web and{" "}
				<strong>UI</strong> design projects. It allows developers and designers to quickly fill layouts with realistic,
				non-distracting text that simulates real content, aiding in visualizing and testing page structure, fonts, and
				spacing.
			</p>
			<Separator />
			<fieldset>
				<RadioGroup className={"gap-4"} defaultValue="generate-sentences" onValueChange={setLoremGenerate}>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="generate-words" id="generate-words" />
						<Label htmlFor="generate-words">Generate Words</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="generate-sentences" id="generate-sentences" />
						<Label htmlFor="generate-sentences">Generate Sentences</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="generate-paragraphs" id="generate-paragraphs" />
						<Label htmlFor="generate-paragraphs">Generate Paragraphs</Label>
					</div>
				</RadioGroup>
			</fieldset>
			<fieldset className={"grid col-span-1 gap-2"}>
				<Label className={"flex items-center gap-1"} htmlFor={"count-input"}>
					<Button className={"size-7"} variant={"ghost"} size={"icon"}>
						<Text />
					</Button>
					<span className={"text-lg font-semibold"}>Number</span>
				</Label>
				<Input
					className={"bg-sidebar rounded-b-sm h-11 pb-2"}
					type={"number"}
					id={"count-input"}
					value={loremCount}
					onInput={(e: ChangeEvent<HTMLInputElement>) => setLoremCount(Number(e.target.value))}
				/>
				<Slider
					className={"-mt-6 border border-transparent"}
					value={[loremCount]}
					max={32}
					min={1}
					step={1}
					onValueChange={(e: number[]) => setLoremCount(e[0])}
				/>
				<p className="text-sm text-muted-foreground">
					Number of <strong>words</strong>, <strong>sentences</strong>, or <strong>paragraphs</strong>
				</p>
			</fieldset>
			<fieldset className={"grid w-full gap-2"}>
				<Label className={"flex items-center gap-1"} htmlFor={"lorem-ipsum-output"}>
					<Button className={"size-7"} variant={"ghost"} size={"icon"}>
						<Scroll />
					</Button>
					<span className={"text-lg font-semibold"}>Lorem Ipsum</span>
				</Label>
				<Textarea rows={12} className={"bg-sidebar p-3"} id={"lorem-ipsum-output"} value={loremIpsum} readOnly={true} />
			</fieldset>
			<Button variant={"outline"} onClick={() => handleCopy(loremIpsum)}>
				Copy Lorem Ipsum
			</Button>
		</div>
	);
}
