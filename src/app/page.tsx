import { AppAuroraBackground } from "@/components/app-aurora-background";
import { AppTimeline } from "@/components/app-timeline";
import { BorderBeam } from "@/components/ui/border-beam";
import { AtSign, Linkedin, Send, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Home() {
	return (
		<div>
			<AppAuroraBackground />
			<div className={"grid sm:gap-10"}>
				<div className="relative grid w-full max-w-4xl mx-auto gap-10 overflow-hidden sm:rounded-3xl bg-background p-10 sm:shadow">
					<div className={"flex flex-col sm:flex-row items-center justify-between gap-8"}>
						<div className={"flex flex-col sm:flex-row items-center gap-10"}>
							<figure className={"size-[128] rounded-full bg-sidebar"}></figure>
							<div className={"grid text-center sm:text-left gap-4"}>
								<span
									className={"text-3xl sm:text-5xl font-semibold leading-none dark:from-white dark:to-slate-900/10"}
								>
									Denis
								</span>
								<span
									className={"text-3xl sm:text-5xl font-semibold leading-none dark:from-white dark:to-slate-900/10"}
								>
									Iakimenko
								</span>
							</div>
						</div>
						<ul className={"grid grid-cols-4 sm:grid-cols-2 gap-8"}>
							<li>
								<Twitter className={"size-8"} />
							</li>
							<li>
								<Linkedin className={"size-8"} />
							</li>
							<li>
								<Send className={"size-8"} />
							</li>
							<li>
								<AtSign className={"size-8"} />
							</li>
						</ul>
					</div>
					<Separator />
					<span className="pointer-events-none whitespace-pre-wrap text-4xl font-semibold leading-none dark:from-white dark:to-slate-900/10">
						dolore mollit excepteur officia
					</span>
					<p>
						Id laboris nisi labore commodo pariatur proident voluptate tempor consectetur esse fugiat sit commodo.
						Occaecat esse anim magna magna est elit mollit fugiat commodo. Ea labore id Lorem minim officia voluptate
						minim proident in incididunt incididunt Lorem incididunt. Exercitation do cillum in ut dolor commodo sunt
						sint duis ipsum sunt nostrud.
					</p>
					<BorderBeam className={"hidden sm:block"} size={192} duration={12} delay={8} />
				</div>
				<div className={"max-w-4xl mx-auto"}>
					<AppTimeline />
				</div>
				<div className={"h-[512px]"}></div>
			</div>
		</div>
	);
}
