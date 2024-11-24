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
					className="relative col-span-1"
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
				</Link>
				<Link
					className="relative col-span-1"
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
					className="relative col-span-1"
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
