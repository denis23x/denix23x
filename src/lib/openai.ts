import OpenAI from "openai";
import type { ModerationMultiModalInput } from "openai/resources/moderations";

const openAI: OpenAI = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

class ModerationError extends Error {
	constructor(message: string = "Content did not pass AI moderation") {
		super(message);

		this.name = this.constructor.name;
	}

	toJSON() {
		return {
			name: this.name,
			message: this.message,
		};
	}
}

const moderate = (data: { [key: string]: string | string[] | number | null }) => {
	const input = (): ModerationMultiModalInput[] => {
		return Object.entries(data)
			.filter(([, value]) => Boolean(value))
			.map(([key, value]) => {
				if (["avatar", "cover"].includes(key)) {
					return {
						type: "image_url",
						image_url: {
							url: String(value),
						},
					};
				} else {
					return {
						type: "text",
						text: String(value),
					};
				}
			});
	};

	return openAI.moderations.create({
		model: "omni-moderation-latest",
		input: input(),
	});
};

export { openAI, moderate, ModerationError };
