import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BlogItems } from "@/lib/items";

export default async function DashboardMarquee() {
	return (
		<div className={"flex flex-col gap-4 min-h-[166px] -mx-4"}>
			<div className={"relative size-full overflow-hidden"}>
				<Marquee
					pauseOnHover
					className="absolute top-0 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
				>
					{(await BlogItems()).map((b, idx: number) => (
						<Link
							href={b.url}
							key={idx}
							className={cn(
								"relative w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
								"border-input bg-sidebar hover:bg-background",
								"transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
							)}
						>
							<div className="flex flex-row items-center gap-2">
								<div className="flex flex-col gap-4">
									{b.icon && b.icon}
									<figcaption className="text-sm font-bold text-foreground">{b.title}</figcaption>
								</div>
							</div>
							<blockquote className="mt-2 text-xs text-foreground">{b.description}</blockquote>
						</Link>
					))}
				</Marquee>
			</div>
		</div>
	);
}
