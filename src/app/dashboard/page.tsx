import { AppHighlight } from "@/components/app-highlight";
import { readFileAsText } from "@/lib/server";

export default async function Page() {
	const code: string = await readFileAsText("/public/page.tsx");

	return (
		<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
			<AppHighlight title={"test"} language={"javascript"} code={code}></AppHighlight>
			<div className="grid auto-rows-min gap-4 md:grid-cols-3">
				<div className="aspect-video rounded-xl bg-muted/50" />
				<div className="aspect-video rounded-xl bg-muted/50" />
				<div className="aspect-video rounded-xl bg-muted/50" />
			</div>
			<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
		</div>
	);
}
