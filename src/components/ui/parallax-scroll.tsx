"use client";

import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Map } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ParallaxScroll = ({ images, className }: { images: string[]; className?: string }) => {
	const { scrollYProgress } =
		typeof window !== "undefined"
			? useScroll({
					// @ts-expect-error probably null
					container: document?.body, // remove this if your container is not fixed height
					offset: ["start start", "end start"], // remove this if your container is not fixed height
				})
			: useScroll();

	const translate1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
	const translate2 = useTransform(scrollYProgress, [0, 1], [0, 0]);

	return (
		<div className={cn("overflow-hidden w-full pt-4 -mt-4", className)}>
			<ul className="grid grid-cols-2 md:grid-cols-4 items-start gap-8">
				{images.map((url, idx) => (
					<li className="grid gap-10" key={"grid-1" + idx}>
						<motion.div style={{ y: idx % 2 ? translate1 : translate2 }}>
							<Link
								className={"relative group"}
								href={`/dashboard/misc/photos/1024/${url}`}
								target={"_blank"}
								rel={"noopener noreferrer"}
							>
								<Image
									loading={"lazy"}
									src={`/dashboard/misc/photos/512/${url}`}
									className="aspect-[3/4] w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
									height="400"
									width="400"
									alt="thumbnail"
								/>
								<span className={"absolute left-4 bottom-4 transition-opacity opacity-0 group-hover:opacity-100"}>
									<Map />
									9VW9+94 Baku, Azerbaijan
								</span>
							</Link>
						</motion.div>
					</li>
				))}
			</ul>
		</div>
	);
};
