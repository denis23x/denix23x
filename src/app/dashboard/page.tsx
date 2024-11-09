"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Separator } from "@/components/ui/separator";
import { IconArrowWaveRightUp, IconBoxAlignRightFilled, IconFileBroken, IconSignature } from "@tabler/icons-react";
import DashboardSkeleton from "@/components/dashboard/dashboard-skeleton";
import DashboardMarquee from "@/components/dashboard/dashboard-marquee";
import DashboardBeams from "@/components/dashboard/dashboard-beams";

export default function Page() {
	return (
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"text-4xl font-extrabold tracking-tight lg:text-5xl"}>Dashboard</h1>
			<p className={"leading-7"}>
				This dashboard provides quick access to organized groups of pages, making it easy to navigate through different
				tools, resources, and collections. With a streamlined layout, you can quickly find links to various sections,
				ensuring efficient access to everything you need in one place.
			</p>
			<Separator />
			<div className={"flex"}>
				<BentoGrid className="w-full">
					{items.map((item, i) => (
						<BentoGridItem
							key={i}
							title={item.title}
							description={item.description}
							header={item.header}
							url={item.url}
							icon={item.icon}
							className={`border-input ${i === 4 || i === 8 ? "md:col-span-2" : ""}`}
						/>
					))}
				</BentoGrid>
			</div>
		</div>
	);
}

const items = [
	{
		title: "Tools",
		description: "Collection of handy tools designed to simplify and enhance your workflow",
		url: "/dashboard/tools",
		header: <DashboardBeams />,
	},
	{
		title: "Misc",
		description: "Collection of personal interests, from playlists to movie recommendations and more",
		url: "/dashboard/misc",
		header: <DashboardSkeleton />,
		icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Art of Design",
		description: "Discover the beauty of thoughtful and functional design.",
		url: "/dashboard/tools",
		header: <DashboardSkeleton />,
		icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Spirit of Adventure",
		description: "Embark on exciting journeys and thrilling discoveries.",
		url: "/dashboard/tools",
		header: <DashboardSkeleton />,
		icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "Blog",
		description: "Understand the impact of effective communication in our lives.",
		url: "/blog",
		header: <DashboardMarquee />,
	},
	{
		title: "The Digital Revolution",
		description: "Join the quest for understanding and enlightenment.",
		url: "/dashboard/misc",
		header: <DashboardSkeleton />,
		icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
	},
];
