import { AppAuroraBackground } from "@/components/app-aurora-background";
import { AppTimeline } from "@/components/app-timeline";
import { AppBusinessCard } from "@/components/ui/app-business-card";

export default function Home() {
	return (
		<>
			<AppAuroraBackground />
			<div className={"grid sm:gap-10"}>
				<AppBusinessCard />
				<AppTimeline />
				<div className={"h-[512px]"}></div>
			</div>
		</>
	);
}
