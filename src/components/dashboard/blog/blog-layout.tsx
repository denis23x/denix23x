import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import BlogScroll from "@/components/dashboard/blog/blog-scroll";
import BlogFooter from "@/components/dashboard/blog/blog-footer";

export default function BlogLayout({ children }: { children: ReactNode }) {
	return (
		<div className={"flex flex-col gap-4 max-w-4xl mx-auto px-4"}>
			<BlogScroll type={"bar"} />
			<div className={"prose max-w-full"}>{children}</div>
			<Separator />
			<BlogFooter />
		</div>
	);
}
