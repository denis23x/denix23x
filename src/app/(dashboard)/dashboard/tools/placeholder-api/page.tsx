import { Separator } from "@/components/ui/separator";
import type { Metadata } from "@/interfaces/metadata";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowUpRight, CircleAlert, Code } from "lucide-react";
import Link from "next/link";
import Safari from "@/components/ui/safari";

export const metadata: Metadata = {
	title: "Placeholder API",
	description:
		"Easily prototype and test database queries with Swagger or Apollo. Use mock data and predefined endpoints for fast front-end development—no live backend required!",
	other: {
		icon: <Code />,
	},
	alternates: {
		canonical: `https://denis23x.info/dashboard/tools/placeholder-api`,
	},
};

export default async function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Placeholder API</h1>
			<p className={"leading-7"}>
				This tool provides a seamless way to prototype and test database queries using <strong>Swagger</strong> or{" "}
				<strong>Apollo</strong>. Designed for developers, it offers a ready-to-use environment with mock data and
				predefined endpoints, enabling quick front-end development and testing workflows. Whether you&#39;re simulating{" "}
				<strong>API</strong> responses or exploring data structures, this tool makes it easy to prototype without
				requiring a live backend.
			</p>
			<Separator />
			<Alert variant="destructive">
				<AlertDescription className={"flex flex-col sm:flex-row items-start gap-2"}>
					<CircleAlert className={"min-w-4 size-4 translate-y-0.5"} />
					<span className={"inline-block"}>
						<strong>All data processed through this API will be moderated using OpenAI&#39;s systems</strong>. Avoid
						submitting sensitive or personal information. Use this API for experimental and testing purposes only, as
						data may be subject to removal or modification without notice.
					</span>
				</AlertDescription>
			</Alert>
			<div className="relative grid md:grid-cols-3 gap-4">
				<Link
					className="relative flex flex-col col-span-1"
					href={"/dashboard/tools/placeholder-api/apollo"}
					target={"_blank"}
					rel={"nofollow tag"}
				>
					<Safari
						url="apollo/sandbox"
						className="size-full object-top dark:hidden block"
						src={"/dashboard/tools/placeholder-api/apollo.webp"}
					/>
					<Safari
						url="apollo/sandbox"
						className="size-full object-top hidden dark:block"
						src={"/dashboard/tools/placeholder-api/apollo-dark.webp"}
					/>
					<div className={"block mx-auto py-2 text-muted-foreground"}>
						<span className={"inline-block text-ellipsis"}>Apollo Sandbox</span>
						<ArrowUpRight className={"inline-block align-baseline size-4"} />
					</div>
				</Link>
				<Link
					className="relative flex flex-col col-span-1"
					href={"/dashboard/tools/placeholder-api/swagger"}
					target={"_blank"}
					rel={"nofollow tag"}
				>
					<Safari
						url="swagger/docs"
						className="size-full object-top dark:hidden block"
						src={"/dashboard/tools/placeholder-api/swagger.webp"}
					/>
					<Safari
						url="swagger/docs"
						className="size-full object-top hidden dark:block"
						src={"/dashboard/tools/placeholder-api/swagger-dark.webp"}
					/>
					<div className={"block mx-auto py-2 text-muted-foreground"}>
						<span className={"inline-block text-ellipsis"}>Swagger UI</span>
						<ArrowUpRight className={"inline-block align-baseline size-4"} />
					</div>
				</Link>
				<Link
					className="relative flex flex-col col-span-1"
					href={"/dashboard/tools/placeholder-api/demo"}
					target={"_blank"}
					rel={"nofollow tag"}
				>
					<Safari
						url="demo"
						className="size-full object-top dark:hidden block"
						src={"/dashboard/tools/placeholder-api/demo.webp"}
					/>
					<Safari
						url="demo"
						className="size-full object-top hidden dark:block"
						src={"/dashboard/tools/placeholder-api/demo-dark.webp"}
					/>
					<div className={"block mx-auto py-2 text-muted-foreground"}>
						<span className={"inline-block text-ellipsis"}>Demo Website</span>
						<ArrowUpRight className={"inline-block align-baseline size-4"} />
					</div>
				</Link>
			</div>
		</div>
	);
}
