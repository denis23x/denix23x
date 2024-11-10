import { HomeAuroraBackground } from "@/components/home/home-aurora-background";
import { HomeTimeline } from "@/components/home/home-timeline";
import { HomeBusinessCard } from "@/components/home/home-business-card";
import { HomeRetro } from "@/components/home/home-retro";

export default function Home() {
	return (
		<>
			<HomeAuroraBackground />
			<div className={"grid lg:gap-10"}>
				<HomeBusinessCard />
				<HomeTimeline />
				<HomeRetro />
			</div>
		</>
	);
}
