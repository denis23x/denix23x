import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";
import { shikiOptions } from "@/configs/options/shikiOptions.mjs";

type AppHighlightProps = {
	title?: string;
	showLineNumbers?: boolean;
	language: string;
	code: string;
};

export async function AppHighlight({ title, showLineNumbers, language, code }: AppHighlightProps) {
	const html: string = await highlightCode({ showLineNumbers, language, code });

	return (
		<section className={"border border-input rounded-md overflow-hidden w-full"}>
			{title && (
				<header className={"flex items-center justify-between gap-4 bg-sidebar border-b py-1.5 px-3 min-h-8"}>
					<div className={"text-xs text-muted-foreground"}>
						<i>{title}</i>
					</div>
					<ul className={"flex items-center justify-end gap-2 opacity-25"}>
						<li className={"block size-2.5 rounded-full bg-foreground"}></li>
						<li className={"block size-2.5 rounded-full bg-foreground"}></li>
						<li className={"block size-2.5 rounded-full bg-foreground"}></li>
					</ul>
				</header>
			)}
			{html ? (
				<div className={"prose min-w-full"} dangerouslySetInnerHTML={{ __html: html }}></div>
			) : (
				<p className={"p-3"}>Loading...</p>
			)}
		</section>
	);
}

async function highlightCode({ showLineNumbers, language, code }: AppHighlightProps) {
	const mdx: string = "```" + `${language} ${showLineNumbers && "showLineNumbers"}\n${code}`;
	const file = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypePrettyCode, shikiOptions)
		.use(rehypeStringify)
		.process(mdx);

	return String(file);
}
