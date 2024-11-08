import { AppAuroraBackground } from "@/components/app-aurora-background";
import { AppTimeline } from "@/components/app-timeline";

export default function Home() {
	return (
		<div>
			<AppAuroraBackground />
			<div className={"max-w-4xl mx-auto"}>
				<AppTimeline />
			</div>
			<div className={"h-[512px]"}></div>
		</div>
	);
}
