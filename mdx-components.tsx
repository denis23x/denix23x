import type { MDXComponents } from "mdx/types";
import MaterialsPre from "@/components/materials/materials-pre";
import MaterialsA from "@/components/materials/materials-a";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		a: props => <MaterialsA {...props} />,
		pre: props => <MaterialsPre {...props} />,
		...components,
	};
}
