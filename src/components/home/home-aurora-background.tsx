"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { Mouse } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HomeAuroraBackground() {
	return (
		<AuroraBackground>
			<motion.div
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.2,
					duration: 0.6,
					ease: "easeInOut",
				}}
				className="relative flex flex-col gap-4 items-center justify-center px-4"
			>
				<div className="text-5xl md:text-7xl font-bold text-foreground text-center">Hi 👋</div>
				<div className="font-extralight text-2xl md:text-4xl text-foreground md:py-4">And this, is My Website.</div>
				<div className={"grid gap-10"}>
					{/* <div className={"flex gap-4 text-foreground"}>
						<Link href={"/dashboard"}>
							<Button className={"rounded-full"}>Dashboard</Button>
						</Link>
						<Link href={"/blog"}>
							<Button variant="outline" className={"rounded-full shadow-none"}>
								Blog
							</Button>
						</Link>
					</div> */}
					<Mouse className={"mx-auto text-foreground animate-bounce"} />
				</div>
			</motion.div>
		</AuroraBackground>
	);
}
