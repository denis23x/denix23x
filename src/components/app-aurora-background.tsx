"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";
// import { FlipWords } from "@/components/ui/flip-words";
// import { Mouse } from "lucide-react";

export function AppAuroraBackground() {
	// const words = ["better", "cute", "beautiful", "modern"];

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
				<div className="text-3xl md:text-7xl font-bold dark:text-white text-center">Hi</div>
				{/*👋*/}
				<div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
					And this, is chemical burn.
				</div>
				{/*<div className="flex justify-center items-center px-4">*/}
				{/*	<div className="text-4xl mx-auto font-extralight text-neutral-600 dark:text-neutral-400">*/}
				{/*		Build*/}
				{/*		<FlipWords words={words} /> <br />*/}
				{/*		websites with Aceternity UI*/}
				{/*	</div>*/}
				{/*</div>*/}
				{/*<div className={"mt-10"}>*/}
				{/*	<Mouse className={"size-12"} />*/}
				{/*</div>*/}
				<Link href={"/dashboard"}>
					<button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
						Dashboard
					</button>
				</Link>
			</motion.div>
		</AuroraBackground>
	);
}
