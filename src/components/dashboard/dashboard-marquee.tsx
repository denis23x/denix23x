import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function DashboardMarquee() {
	return (
		<div className={"flex flex-col gap-4 min-h-[166px] -mx-4"}>
			<div className={"relative size-full overflow-hidden"}>
				<Marquee
					pauseOnHover
					className="absolute top-0 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
				>
					{files.map((f, idx: number) => (
						<Link
							href={f.url}
							key={idx}
							className={cn(
								"relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
								"border-input bg-sidebar hover:bg-background",
								"transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
							)}
						>
							<div className="flex flex-row items-center gap-2">
								<div className="flex flex-col">
									<figcaption className="text-sm font-bold text-foreground">{f.name}</figcaption>
								</div>
							</div>
							<blockquote className="mt-2 text-xs text-foreground">{f.body}</blockquote>
						</Link>
					))}
				</Marquee>
			</div>
		</div>
	);
}

const files = [
	{
		name: "Dynamic sitemap 📍",
		url: "/dashboard/materials/how-to-create-dynamic-sitemap-for-seo",
		body: "A sitemap.xml is an XML file that lists all the URLs on your website, guiding search engine crawlers through your content. This file is essential for SEO because it helps search engines index your pages more efficiently.",
	},
	{
		name: "SEO friendly URLs 🔗",
		url: "/dashboard/materials/how-to-make-storage-urls-seo-friendly",
		body: "Did you know that not every link will be crawled by default by Googlebot? Google prefers SEO friendly links because they help search engines and users understand the content of the page more easily.",
	},
	{
		name: "SVG Sprite 🌠",
		url: "/dashboard/materials/how-to-use-svg-sprite-icons-for-development",
		body: "In web development, an SVG sprite is a collection of SVG icons or graphics bundled together in a single SVG file. Each graphic within the sprite can be referenced individually, allowing for efficient use of SVG graphics on a website.",
	},
	{
		name: "Git with Husky 🐶",
		url: "/dashboard/materials/git-workflow-with-husky-and-conventional-commits",
		body: "Probably the most powerful feature of Git is to run any scripts before or after git-operations. Although they are great for automation of things in your development process, managing them can be really cumbersome. That's where Husky comes in!",
	},
	{
		name: "Summarize text 🤖",
		url: "/dashboard/materials/how-to-summarize-text-in-typeScript-without-ai",
		body: "All the applications that allow users to create long-form content, such as blog posts or news articles, will likely need summaries of these pieces. It's quite possible to do using a simple TypeScript function without any AI-driven models.",
	},
];
