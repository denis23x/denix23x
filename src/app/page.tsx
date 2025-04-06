import { HomeAuroraBackground } from "@/components/home/home-aurora-background";
import { HomeTimeline } from "@/components/home/home-timeline";
import { HomeBusinessCard } from "@/components/home/home-business-card";
import { HomeRetro } from "@/components/home/home-retro";
import type { Metadata } from "@/interfaces/metadata";

export const metadata: Metadata = {
	alternates: {
		canonical: `${process.env.PUBLIC_URL!}`,
	},
};

export default function Home() {
	return (
		<div className={"bg-sidebar"}>
			<HomeAuroraBackground />
			<div className={"grid lg:gap-10"}>
				<HomeBusinessCard />
				<HomeTimeline />
			</div>
			<HomeRetro />
		</div>
	);
}
