import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Separator } from "@/components/ui/separator";
import DashboardSkeleton from "@/components/dashboard/dashboard-skeleton";
import DashboardMarquee from "@/components/dashboard/dashboard-marquee";
import DashboardBeams from "@/components/dashboard/dashboard-beams";
import DashboardWordRotate from "@/components/dashboard/dashboard-word-rotate";
import DashboardVideo from "@/components/dashboard/dashboard-video";

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
			<BentoGrid className="w-full">
				{items.map((item, i) => (
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.header}
						url={item.url}
						className={`border-input ${i === 4 || i === 8 ? "md:col-span-2" : ""}`}
					/>
				))}
			</BentoGrid>
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
		header: <DashboardWordRotate />,
	},
	{
		title: "Placeholder",
		description: "Ut duis nostrud est incididunt duis ea adipisicing velit qui.",
		url: "/dashboard",
		header: <DashboardVideo />,
	},
	{
		title: "Placeholder",
		description: "Ut non amet exercitation aute cillum ea proident quis irure.",
		url: "/dashboard",
		header: <DashboardSkeleton />,
	},
	{
		title: "Materials",
		description: "Various topics, sharing tips, tutorials, and ideas to support your projects and inspire creativity",
		url: "/dashboard/materials",
		header: <DashboardMarquee />,
	},
	{
		title: "Placeholder",
		description: "Pariatur ea voluptate exercitation nostrud ut et adipisicing duis labore eiusmod ullamco duis.",
		url: "/dashboard",
		header: <DashboardSkeleton />,
	},
];
