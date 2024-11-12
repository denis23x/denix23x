import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { navMainBookmarks } from "@/app/store/useNavMain";
import { LinkPreview } from "@/components/ui/link-preview";
import { Link } from "lucide-react";

export const metadata: Metadata = {
	title: navMainBookmarks.title,
	description: navMainBookmarks.description,
};

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Bookmarks</h1>
			<p className={"leading-7"}>
				This page features a curated collection of my favorite developer resources, from essential guides and coding
				tips to tools and tutorials that boost productivity. Discover bookmarks that have been invaluable in my
				development journey, with insights into why each resource stands out. Perfect for developers looking to expand
				their toolkit or find practical advice to elevate their skills.
			</p>
			<Separator />
			<div className="grid w-full bg-background dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
				<div className="absolute pointer-events-none inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				<ul className="relative flex flex-wrap items-start justify-start gap-4">
					{items.map((item, i: number) => (
						<li className={"flex items-center justify-start gap-2"} key={i}>
							<Link className={"min-w-5 size-5"} />
							<LinkPreview
								url={item.url}
								imageSrc={item.image}
								isStatic={true}
								className={"font-normal text-lg sm:text-2xl whitespace-nowrap"}
							>
								{item.label}
							</LinkPreview>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

const items = [
	{
		url: "https://metatags.io",
		label: "Meta Tags",
		image: "/dashboard/misc/bookmarks/meta-tags.png",
	},
	{
		url: "https://pagespeed.web.dev",
		label: "Page Speed",
		image: "/dashboard/misc/bookmarks/page-speed.png",
	},
	{
		url: "https://designsystems.surf",
		label: "Design System Database",
		image: "/dashboard/misc/bookmarks/design-system-database.png",
	},
	{
		url: "https://patternpad.com",
		label: "PatternPad",
		image: "/dashboard/misc/bookmarks/pattern-pad.png",
	},
	{
		url: "https://globster.xyz",
		label: "Globster",
		image: "/dashboard/misc/bookmarks/globster.png",
	},
	{
		url: "https://pair.withgoogle.com",
		label: "PAIR",
		image: "/dashboard/misc/bookmarks/PAIR.png",
	},
	{
		url: "https://lucide.dev/",
		label: "Lucide",
		image: "/dashboard/misc/bookmarks/lucide.png",
	},
];
