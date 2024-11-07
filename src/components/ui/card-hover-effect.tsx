import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
	items,
	className,
}: {
	items: {
		title: string;
		description: string;
		link: string;
	}[];
	className?: string;
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5", className)}>
			{items.map((item, idx) => (
				<Link
					href={item?.link}
					key={item?.link}
					className="relative group  block p-2 h-full w-full"
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
								layoutId="hoverBackground"
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
					<Card>
						<CardTitle>{item.title}</CardTitle>
						<CardDescription>{item.description}</CardDescription>
					</Card>
				</Link>
			))}
		</div>
	);
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
	return (
		<div
			className={cn(
				"rounded-2xl h-full w-full p-4 overflow-hidden bg-background border border-input dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
				className
			)}
		>
			<div className="relative z-50">
				<div className="">{children}</div>
			</div>
		</div>
	);
};
export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
	return <h4 className={cn("text-foreground font-bold tracking-wide", className)}>{children}</h4>;
};
export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
	return (
		<p
			className={cn(
				"mt-4 text-foreground tracking-wide leading-relaxed overflow-hidden line-clamp-4 text-sm",
				className
			)}
		>
			{children}
		</p>
	);
};
