"use client";

import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ScreenshotProps = {
	screenshot: Screenshot;
	index: number;
	hovered: number | null;
	setHovered: React.Dispatch<React.SetStateAction<number | null>>;
};

export const Screenshot = React.memo(({ screenshot, index, hovered, setHovered }: ScreenshotProps) => (
	<li
		onMouseEnter={() => setHovered(index)}
		onMouseLeave={() => setHovered(null)}
		className={cn(
			"rounded relative bg-sidebar w-full aspect-square transition-all duration-300 ease-out border border-input overflow-hidden",
			hovered !== null && hovered !== index ? "blur-sm scale-[0.98]" : "hover:shadow-lg hover:scale-[1.02]"
		)}
	>
		<Link href={screenshot.url} target={"_blank"} rel={"noopener noreferrer"}>
			<Image
				src={screenshot.src}
				alt={screenshot.url}
				width={172}
				height={172}
				className="object-cover object-top absolute inset-0"
			/>
		</Link>
	</li>
));

Screenshot.displayName = "Screenshot";

type Screenshot = {
	src: string;
	url: string;
};

export function HomeTimelineScreenshots({ screenshots }: { screenshots: Screenshot[] }) {
	const [hovered, setHovered] = useState<number | null>(null);

	return (
		<ul className="grid grid-cols-2 gap-4">
			{screenshots.map((screenshot, index) => (
				<Screenshot key={index} screenshot={screenshot} index={index} hovered={hovered} setHovered={setHovered} />
			))}
		</ul>
	);
}
