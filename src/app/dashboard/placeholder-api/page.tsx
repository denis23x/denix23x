import { Separator } from "@/components/ui/separator";
import { AppHighlight } from "@/components/app-highlight";
import { readFileAsText } from "@/lib/server";

export default async function Page() {
	const code: string = await readFileAsText("/public/page.tsx");

	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>Placeholder API</h1>
			<p className={"leading-7"}>
				This tool offers a quick and easy way to mock backend API endpoints, providing developers with predefined,
				free-to-use endpoints for testing and prototyping. Ideal for front-end development and testing workflows, it
				allows you to simulate API responses without needing a live backend.
			</p>
			<Separator />
			<div className={"flex flex-col lg:flex-row gap-4"}>
				<AppHighlight title={"test"} language={"javascript"} code={code}></AppHighlight>
			</div>
		</div>
	);
}
