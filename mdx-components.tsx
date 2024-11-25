import type { MDXComponents } from "mdx/types";
import BlogPre from "@/components/dashboard/blog/blog-pre";
import BlogA from "@/components/dashboard/blog/blog-a";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		a: props => <BlogA {...props} />,
		pre: props => <BlogPre {...props} />,
		...components,
	};
}
