import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "This page could not be found",
	description:
		"Page not found. The link you followed may be broken or the page removed. Return to the homepage or explore other sections of website.",
};

export default function Custom404() {
	return (
		<div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
			<Link href={"/"}>
				<p className="z-10 whitespace-pre-wrap text-center text-7xl font-mono tracking-tighter text-muted-foreground">
					404
				</p>
			</Link>
		</div>
	);
}
