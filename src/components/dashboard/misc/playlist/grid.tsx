"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import useStore from "@/stores/playlist.store";

export default function Grid() {
	const { cards, setActive } = useStore();

	return (
		<ul className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-start gap-4">
			{cards.map(card => (
				<motion.div
					layoutId={`card-${card.uid}`}
					key={card.uid}
					onClick={() => setActive(card)}
					className="p-4 flex flex-col hover:bg-neutral-100 dark:hover:bg-sidebar rounded-xl cursor-pointer"
				>
					<div className="flex gap-4 flex-col  w-full">
						<motion.div layoutId={`image-${card.uid}`}>
							<Image
								width={512}
								height={512}
								placeholder={"blur"}
								blurDataURL={card.blurDataURL}
								src={card.src}
								alt={card.title}
								className="w-full aspect-square rounded-lg object-cover object-top"
							/>
						</motion.div>
						<div className="flex justify-center items-center flex-col overflow-hidden">
							<motion.span
								layoutId={`title-${card.uid}`}
								className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
							>
								{card.title}
							</motion.span>
							<motion.p
								layoutId={`description-${card.uid}`}
								className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
							>
								{card.description}
							</motion.p>
						</div>
					</div>
				</motion.div>
			))}
		</ul>
	);
}
