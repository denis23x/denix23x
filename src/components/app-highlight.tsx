// import { codeToHtml } from "shiki";

interface AppHighlightProps {
	title?: string;
	language: string;
	code: string;
}

export async function AppHighlight({ title, language, code }: AppHighlightProps) {
	const html: string = "";

	// const html: Promise<string> = codeToHtml(code, {
	// 	lang: language,
	// 	themes: {
	// 		light: "github-light",
	// 		dark: "github-dark",
	// 	},
	// });

	return (
		<section className={"border shadow-sm rounded-md overflow-hidden w-full"}>
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
			<div className={"text-xs relative min-h-16 bg-background"}>
				{html ? <div dangerouslySetInnerHTML={{ __html: await html }}></div> : <p className={"p-3"}>Loading...</p>}
			</div>
		</section>
	);
}
