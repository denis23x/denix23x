import { AppAuroraBackground } from "@/components/app-aurora-background";
import { AppTimeline } from "@/components/app-timeline";
import { AppBusinessCard } from "@/components/app-business-card";
import { AppRetro } from "@/components/app-retro";

export default function Home() {
	return (
		<>
			<AppAuroraBackground />
			<div className={"grid sm:gap-10"}>
				<AppBusinessCard />
				<AppTimeline />
				<AppRetro />
			</div>
		</>
	);
}
