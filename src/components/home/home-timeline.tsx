import { Timeline } from "@/components/ui/timeline";
import { HomeTimelineScreenshots } from "@/components/home/home-timeline-screenshots";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function HomeTimeline() {
	const data = [
		{
			title: "2025",
			content: (
				<div>
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
						Is still unfolding, a year filled with potential and opportunities yet to be realized. The journey is
						ongoing, and the best is yet to come.
					</p>
					<Separator />
					<HomeTimelineScreenshots screenshots={[]} />
					<div className={"grid gap-4 py-4"}>
						<span className={"block text-xl font-semibold leading-none dark:from-white dark:to-slate-900/10"}>
							Deepwood
						</span>
						<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
							One of my most exciting projects was creating my first game using <strong>Godot</strong>. Diving into this
							powerful game engine, I learned how to combine my coding expertise with creative game design.
						</p>
						<Link
							className={"text-sm font-semibold leading-none dark:from-white dark:to-slate-900/10 underline"}
							href={"https://denis23x.itch.io/deepwood"}
							target={"_blank"}
							rel={"noopener noreferrer"}
						>
							Run Game For Free on Itch.io
						</Link>
					</div>
					<ul className={"grid grid-cols-3 gap-2 min-h-[76px]"}>
						<li className={"relative block"}>
							<Link
								className={"block"}
								href={"https://img.itch.zone/aW1hZ2UvMzI1MDgyOS8xOTQ2NTYwMC5wbmc=/original/k%2FBFwk.png"}
								target={"_blank"}
								rel={"noopener noreferrer"}
							>
								<Image
									className={"object-cover object-top absolute inset-0 border border-input overflow-hidden rounded"}
									src={"https://img.itch.zone/aW1hZ2UvMzI1MDgyOS8xOTQ2NTYwMC5wbmc=/original/k%2FBFwk.png"}
									alt={"Deepwood Screenshot 1"}
									width={172}
									height={97}
								></Image>
							</Link>
						</li>
						<li className={"relative block"}>
							<Link
								className={"block"}
								href={"https://img.itch.zone/aW1hZ2UvMzI1MDgyOS8xOTQ2NTYwMS5wbmc=/original/TKQnmA.png"}
								target={"_blank"}
								rel={"noopener noreferrer"}
							>
								<Image
									className={"object-cover object-top absolute inset-0 border border-input overflow-hidden rounded"}
									src={"https://img.itch.zone/aW1hZ2UvMzI1MDgyOS8xOTQ2NTYwMS5wbmc=/original/TKQnmA.png"}
									alt={"Deepwood Screenshot 2"}
									width={172}
									height={97}
								></Image>
							</Link>
						</li>
						<li className={"relative block"}>
							<Link
								className={"block"}
								href={"https://img.itch.zone/aW1hZ2UvMzI1MDgyOS8xOTQ2NTYwMy5wbmc=/original/VbuNWI.png"}
								target={"_blank"}
								rel={"noopener noreferrer"}
							>
								<Image
									className={"object-cover object-top absolute inset-0 border border-input overflow-hidden rounded"}
									src={"https://img.itch.zone/aW1hZ2UvMzI1MDgyOS8xOTQ2NTYwMy5wbmc=/original/VbuNWI.png"}
									alt={"Deepwood Screenshot 3"}
									width={172}
									height={97}
								></Image>
							</Link>
						</li>
					</ul>
				</div>
			),
		},
		{
			title: "2024",
			content: (
				<div>
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
						Enhanced complex PHP projects with new functionalities using Twig, native JavaScript, jQuery, REST, React
						and Angular.
					</p>
					<HomeTimelineScreenshots screenshots={screenshots2024} />
				</div>
			),
		},
		{
			title: "2023",
			content: (
				<div>
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
						Designed and executed frontend solutions for partner dashboards and CRM integrations, utilizing a
						Backend-for-Frontend architecture to enhance configuration flexibility in user interfaces.
					</p>
					<HomeTimelineScreenshots screenshots={screenshots2023} />
				</div>
			),
		},
		{
			title: "Earlier",
			content: (
				<div>
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
						Delivered cross-browser compatibility and backend integration for web applications in the finance and real
						estate sector, focusing on performance optimization and codebase improvements.
					</p>
					<HomeTimelineScreenshots screenshots={screenshotsEarlier} />
				</div>
			),
		},
	];

	return (
		<div className="relative grid w-full lg:max-w-4xl mx-auto gap-10 overflow-hidden lg:rounded-3xl bg-background lg:shadow">
			<Timeline data={data} />
		</div>
	);
}

const screenshots2024 = [
	{
		src: "/home/timeline/cooplay.webp",
		url: "https://cooplay.app/",
	},
	{
		src: "/home/timeline/kostyl-works.webp",
		url: "https://kostyl.works/",
	},
	{
		src: "/home/timeline/rocket-kostyl-works.webp",
		url: "https://rocket.kostyl.works/",
	},
	{
		src: "/home/timeline/visual-sectors.webp",
		url: "https://visualsectors.com/",
	},
];

const screenshots2023 = [
	{
		src: "/home/timeline/bookaboom.webp",
		url: "https://ln.bookaboom.ru/",
	},
	{
		src: "/home/timeline/dabster.webp",
		url: "https://dabster.im/",
	},
	{
		src: "/home/timeline/audio-litnet.webp",
		url: "https://audio.litnet.com/",
	},
	{
		src: "/home/timeline/delibri.webp",
		url: "https://www.publishmepod.online/",
	},
];

const screenshotsEarlier = [
	{
		src: "/home/timeline/unicom24.webp",
		url: "https://unicom24.ru/",
	},
	{
		src: "/home/timeline/pik.webp",
		url: "https://www.pik.ru/",
	},
];
