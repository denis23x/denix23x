import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { ArrowUpRight } from "lucide-react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		a: ({ children, href }) => {
			return (
				<Link className={"inline-flex items-center text-foreground underline"} href={href as string}>
					{children}
					<ArrowUpRight className={"block size-4"} />
				</Link>
			);
		},
		...components,
	};
}
