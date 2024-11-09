"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Mouse } from "lucide-react";
import Link from "next/link";

export function HomeAuroraBackground() {
	return (
		<AuroraBackground>
			<motion.div
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className="relative flex flex-col gap-4 items-center justify-center px-4"
			>
				<div className="text-5xl md:text-7xl font-bold dark:text-white text-center">Hi 👋</div>
				<div className="font-extralight text-2xl md:text-4xl dark:text-neutral-200 md:py-4">
					And this, is my website.
				</div>
				<div className={"grid gap-10"}>
					<Link
						className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
						href={"/dashboard"}
					>
						Dashboard
					</Link>
					<Mouse className={"mx-auto text-foreground animate-bounce"} />
				</div>
			</motion.div>
		</AuroraBackground>
	);
}
