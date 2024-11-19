"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useStore from "@/stores/lorem-ipsum.store";

export default function Radio() {
	const { setLoremGenerate } = useStore();

	return (
		<RadioGroup className={"gap-4"} defaultValue="generate-sentences" onValueChange={setLoremGenerate}>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="generate-slug" id="generate-slug" />
				<Label className={"cursor-pointer"} htmlFor="generate-slug">
					Generate Slug
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="generate-words" id="generate-words" />
				<Label className={"cursor-pointer"} htmlFor="generate-words">
					Generate Words
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="generate-sentences" id="generate-sentences" />
				<Label className={"cursor-pointer"} htmlFor="generate-sentences">
					Generate Sentences
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="generate-paragraphs" id="generate-paragraphs" />
				<Label className={"cursor-pointer"} htmlFor="generate-paragraphs">
					Generate Paragraphs
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="generate-lines" id="generate-lines" />
				<Label className={"cursor-pointer"} htmlFor="generate-lines">
					Generate Lines
				</Label>
			</div>
		</RadioGroup>
	);
}
