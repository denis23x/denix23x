import { cn } from "@/lib/utils";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface AppGridEffectProps {
	items: {
		title: string;
		icon: LucideIcon;
		description: string;
		link: string;
	}[];
	className?: string;
}

export const AppGridEffect = ({ items, className }: AppGridEffectProps) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<ul className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5", className)}>
			{items.map((item, idx: number) => (
				<li key={item?.link}>
					<Link
						href={item?.link}
						className={"relative group block p-2 h-full w-full"}
						onMouseEnter={() => setHoveredIndex(idx)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						<AnimatePresence>
							{hoveredIndex === idx && (
								<motion.span
									className={"absolute inset-0 h-full w-full bg-neutral-100 dark:bg-sidebar block rounded-3xl"}
									layoutId={"hoverBackground"}
									initial={{ opacity: 0 }}
									animate={{
										opacity: 1,
										transition: { duration: 0.15 },
									}}
									exit={{
										opacity: 0,
										transition: { duration: 0.15, delay: 0.2 },
									}}
								/>
							)}
						</AnimatePresence>
						<div
							className={`rounded-2xl h-full w-full p-4 overflow-hidden bg-background border border-input group-hover:border-ring relative z-20`}
						>
							<div className={"grid gap-4 relative z-50"}>
								{item.icon && <item.icon />}
								<span className={"text-foreground font-bold tracking-wide"}>{item.title}</span>
								<p className={"text-foreground tracking-wide leading-relaxed overflow-hidden line-clamp-4 text-sm"}>
									{item.description}
								</p>
							</div>
						</div>
					</Link>
				</li>
			))}
		</ul>
	);
};
