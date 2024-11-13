import { Timeline } from "@/components/ui/timeline";
import { HomeTimelineScreenshots } from "@/components/home/home-timeline-screenshots";

export function HomeTimeline() {
	const data = [
		{
			title: "2024",
			content: (
				<div>
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
						Enhanced complex PHP projects with new functionalities using Twig, native JavaScript, jQuery, REST, and
						Angular.
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
						Delivered cross-browser compatibility and backend integration for web applications in the real estate
						sector, focusing on performance optimization and codebase improvements.
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
