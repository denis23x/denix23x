import { cn } from "@/lib/utils";
import Link from "next/link";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
	return (
		<div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto ", className)}>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	url,
	header,
	icon,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	url: string;
	header?: React.ReactNode;
	icon?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-2",
				className
			)}
		>
			{header}
			<Link className="group-hover/bento:translate-x-2 transition duration-200" href={url}>
				{icon}
				<div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 line-clamp-1">{title}</div>
				<div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">{description}</div>
			</Link>
		</div>
	);
};
