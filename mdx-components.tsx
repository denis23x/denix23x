import type { MDXComponents } from "mdx/types";
import BlogPre from "@/components/blog/blog-pre";
import BlogA from "@/components/blog/blog-a";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		a: props => <BlogA {...props} />,
		pre: props => <BlogPre {...props} />,
		...components,
	};
}
