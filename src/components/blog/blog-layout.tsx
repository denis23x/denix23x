import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import BlogScroll from "@/components/blog/blog-scroll";
import BlogFooter from "@/components/blog/blog-footer";

export default function BlogLayout({ children }: { children: ReactNode }) {
	return (
		<div className={"flex flex-1 flex-col gap-4 overflow-auto"}>
			<BlogScroll type={"bar"} />
			<div className={"prose max-w-full"}>{children}</div>
			<Separator />
			<BlogFooter />
		</div>
	);
}
