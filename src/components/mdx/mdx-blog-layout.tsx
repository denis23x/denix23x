import Link from "next/link";
import { ReactNode } from "react";

export default function MdxBlogLayout({ children }: { children: ReactNode }) {
	return (
		<div className={"prose grid max-w-4xl bg-background shadow rounded-xl p-4 my-4 mx-auto"}>
			<Link href={"/dashboard"}>Dashboard</Link>
			<Link href={"/blog"}>Blog</Link>
			<div className={"w-full overflow-auto"}>{children}</div>
		</div>
	);
}
