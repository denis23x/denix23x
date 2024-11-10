import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, House } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import MdxBlogFooter from "@/components/mdx/mdx-blog-footer";

export default function MdxBlogLayout({ children }: { children: ReactNode }) {
	return (
		<div className={"bg-background"}>
			<div className={"flex flex-col gap-4 max-w-4xl mx-auto p-4"}>
				<div className={"flex items-center justify-between gap-4"}>
					<Link href={"/blog"}>
						<ArrowLeft />
					</Link>
					<Link href={"/"}>
						<House />
					</Link>
				</div>
				<Separator />
				<div className={"prose max-w-full"}>{children}</div>
				<MdxBlogFooter />
			</div>
		</div>
	);
}
