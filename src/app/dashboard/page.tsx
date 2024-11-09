"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Separator } from "@/components/ui/separator";
import React from "react";
import {
	IconArrowWaveRightUp,
	IconBoxAlignRightFilled,
	IconBoxAlignTopLeft,
	IconClipboardCopy,
	IconFileBroken,
	IconSignature,
	IconTableColumn,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { AnimatedBeamMultipleOutputDemo } from "@/components/test";

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

const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const files = [
	{
		name: "Dynamic sitemap",
		body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
	},
	{
		name: "SEO friendly URLs",
		body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data. A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
	},
	{
		name: "SVG Sprite",
		body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation. Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
	},
	{
		name: "keys.gpg",
		body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages. GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
	},
	{
		name: "seed.txt",
		body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain. A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
	},
];

const NewTest = () => {
	return (
		<div className={"relative size-full overflow-hidden min-h-[166px] border border-input bg-sidebar rounded-xl"}>
			<Marquee
				pauseOnHover
				className="absolute top-4 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
			>
				{files.map((f: any, idx: number) => (
					<figure
						key={idx}
						className={cn(
							"relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
							"border-gray-950/[.1] bg-background hover:bg-background",
							"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
							"transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
						)}
					>
						<div className="flex flex-row items-center gap-2">
							<div className="flex flex-col">
								<figcaption className="text-sm font-medium dark:text-white">{f.name}</figcaption>
							</div>
						</div>
						<blockquote className="mt-2 text-xs">{f.body}</blockquote>
					</figure>
				))}
			</Marquee>
		</div>
	);
};

const items = [
	{
		title: "Tools",
		description: "Explore the birth of groundbreaking ideas and inventions.",
		url: "/dashboard/tools",
		header: <AnimatedBeamMultipleOutputDemo />,
		icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Digital Revolution",
		description: "Dive into the transformative power of technology.",
		url: "/dashboard/tools",
		header: <Skeleton />,
		icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Art of Design",
		description: "Discover the beauty of thoughtful and functional design.",
		url: "/dashboard/tools",
		header: <Skeleton />,
		icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Spirit of Adventure",
		description: "Embark on exciting journeys and thrilling discoveries.",
		url: "/dashboard/tools",
		header: <Skeleton />,
		icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "Blog",
		description: "Understand the impact of effective communication in our lives.",
		url: "/blog",
		header: <NewTest />,
		icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "Misc",
		description: "Join the quest for understanding and enlightenment.",
		url: "/dashboard/misc",
		header: <Skeleton />,
		icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Joy of Creation",
		description: "Experience the thrill of bringing ideas to life.",
		url: "/dashboard/tools",
		header: <Skeleton />,
		icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
	},
];
