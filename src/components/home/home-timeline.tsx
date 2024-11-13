import { Timeline } from "@/components/ui/timeline";

export function HomeTimeline() {
	const data = [
		{
			title: "2024",
			content: (
				<div>
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
						Led a backend migration from Node.js to PHP, incorporating SVG graphics for high-volume data visualizations,
						enabling more insightful analytics through custom diagrams and D3.js visualizations.
					</p>
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
						Enhanced complex PHP projects with new functionalities using Twig, native JavaScript, jQuery, REST, and
						Angular.
					</p>
				</div>
			),
		},
		{
			title: "2023",
			content: (
				<div>
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
						Developed an educational application for a top-ranked startup, covering over 70% of code with end-to-end
						tests, and integrated internationalization workflows into CI/CD pipelines to support global scaling.
					</p>
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
						Implemented a micro-frontend architecture to streamline integration, ensuring seamless user experience and
						feature flexibility.
					</p>
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
						Designed and executed frontend solutions for partner dashboards and CRM integrations, utilizing a
						Backend-for-Frontend architecture to enhance configuration flexibility in user interfaces.
					</p>
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
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
						Played a key role in expanding a digital product team, contributing to foundational projects that laid the
						groundwork for future growth.
					</p>
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
