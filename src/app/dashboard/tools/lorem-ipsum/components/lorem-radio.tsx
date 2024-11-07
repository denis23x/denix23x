"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useStore from "../store";

export default function LoremRadio() {
	const { setLoremGenerate } = useStore();

	return (
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
	);
}
