import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { navMainPlaceholderApi } from "@/app/store/useNavMain";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";
import Link from "next/link";
import Safari from "@/components/ui/safari";

export const metadata: Metadata = {
	title: navMainPlaceholderApi.title,
	description: navMainPlaceholderApi.description,
};

export default async function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Placeholder API</h1>
			<p className={"leading-7"}>
				This tool offers a quick and easy way to mock backend <strong>API</strong> endpoints, providing developers with
				predefined, free-to-use endpoints for testing and prototyping. Ideal for front-end development and testing
				workflows, it allows you to simulate <strong>API</strong> responses without needing a live backend.
			</p>
			<Separator />
			<Alert variant="destructive">
				<AlertDescription className={"flex flex-col sm:flex-row items-start gap-2"}>
					<CircleAlert className={"min-w-4 size-4 translate-y-0.5"} />
					<span className={"inline-block"}>
						<strong>Data is subject to removal at any time</strong>, either due to periodic resets or other operational
						factors. Use this API exclusively for experimental and testing purposes where data retention is not
						critical.
					</span>
				</AlertDescription>
			</Alert>
			<Link href={"/demo/rest-api/swagger"}>http://localhost:3000/demo/rest-api/swagger</Link>
			<div className="relative flex flex-col md:flex-row gap-4">
				<div className="relative max-w-1/2">
					<Safari
						url="magicui.design"
						className="size-full object-top"
						// src={"/home/timeline/audio-litnet.webp"}
					/>
				</div>
				<div className="relative max-w-1/2">
					<Safari
						url="magicui.design"
						className="size-full object-top"
						// src={"/home/timeline/dabster.webp"}
					/>
				</div>
			</div>
		</div>
	);
}
