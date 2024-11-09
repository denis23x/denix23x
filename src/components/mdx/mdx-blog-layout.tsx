import Link from "next/link";
import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

export default function MdxBlogLayout({ children }: { children: ReactNode }) {
	return (
		<div className={"prose grid max-w-4xl bg-background shadow rounded-xl p-4 my-4 mx-auto"}>
			<Link href={"/blog"}>Back to blog</Link>
			<Link href={"/dashboard"}>Back to dashboard</Link>
			<Separator />
			<div className={"w-full overflow-auto"}>{children}</div>
		</div>
	);
}
