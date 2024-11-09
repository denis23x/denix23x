import type { MDXComponents } from "mdx/types";
import MdxBlogPre from "@/components/mdx/mdx-blog-pre";
import MdxBlogA from "@/components/mdx/mdx-blog-a";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		a: props => <MdxBlogA {...props} />,
		pre: props => <MdxBlogPre {...props} />,
		...components,
	};
}
