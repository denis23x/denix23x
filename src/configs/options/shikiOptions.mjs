import { transformerMetaHighlight } from "@shikijs/transformers";

/** @type {import('rehype-pretty-code').Options} */
export const shikiOptions = {
	keepBackground: false,
	theme: {
		dark: "github-dark",
		light: "github-light",
	},
	transformers: [transformerMetaHighlight()],
};
