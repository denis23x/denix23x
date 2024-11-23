import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { navMainPlaceholderApi } from "@/stores/nav-main.store";
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
				This tool provides a seamless way to prototype and test database queries using <strong>Swagger</strong> or{" "}
				<strong>Apollo</strong>. Designed for developers, it offers a ready-to-use environment with mock data and
				predefined endpoints, enabling quick front-end development and testing workflows. Whether you&#39;re simulating
				<strong>API</strong> responses or exploring data structures, this tool makes it easy to prototype without
				requiring a live backend.
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
			<div className="relative flex flex-col md:flex-row gap-4">
				<Link
					className="relative max-w-1/2"
					href={"/dashboard/tools/placeholder-api/apollo"}
					target={"_blank"}
					rel={"nofollow tag"}
				>
					<Safari
						url="apollo/sandbox"
						className="size-full object-top dark:hidden block"
						src={"/dashboard/tools/placeholder-api/apollo.png"}
					/>
					<Safari
						url="apollo/sandbox"
						className="size-full object-top hidden dark:block"
						src={"/dashboard/tools/placeholder-graphql/apollo-dark.png"}
					/>
				</Link>
				<Link
					className="relative max-w-1/2"
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
				</Link>
				<Link
					className="relative max-w-1/2"
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
				</Link>
			</div>
		</div>
	);
}
