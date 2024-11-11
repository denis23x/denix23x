"use client";

import Image from "next/image";
import { RefObject, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Separator } from "@/components/ui/separator";
import { CirclePlay } from "lucide-react";
import ExpandableCloseIcon from "./expandable-close-icon";
import useStore from "../store";

export default function ExpandableCard() {
	const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const { active, setActive } = useStore();

	useEffect(() => {
		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setActive(false);
			}
		}

		if (active && typeof active === "object") {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [active]);

	useOutsideClick(ref, () => setActive(null));

	return (
		<>
			<AnimatePresence>
				{active && typeof active === "object" && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/20 h-full w-full z-10"
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{active && typeof active === "object" ? (
					<div className="fixed inset-0  grid place-items-center z-[100]">
						<motion.button
							key={`button-${active.uid}`}
							layout
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							exit={{
								opacity: 0,
								transition: {
									duration: 0.05,
								},
							}}
							className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
							onClick={() => setActive(null)}
						>
							<ExpandableCloseIcon />
						</motion.button>
						<motion.div
							layoutId={`card-${active.uid}`}
							ref={ref}
							className="w-full max-w-[384px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
						>
							<motion.div layoutId={`image-${active.uid}`}>
								<Image
									priority
									width={512}
									height={512}
									placeholder={"blur"}
									blurDataURL={active.blurDataURL}
									src={active.src}
									alt={active.title}
									className="w-full aspect-square sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
								/>
							</motion.div>
							<div>
								<div className="flex justify-between items-center p-4">
									<div className="">
										<motion.span
											layoutId={`title-${active.uid}`}
											className="block font-medium text-neutral-700 dark:text-neutral-200 text-base"
										>
											{active.title}
										</motion.span>
										<motion.p
											layoutId={`description-${active.uid}`}
											className="text-neutral-600 dark:text-neutral-400 text-base"
										>
											{active.description}
										</motion.p>
									</div>
									<motion.a
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										href={active.link}
										target="_blank"
										className="p-2 rounded-full bg-red-500 text-white"
									>
										<CirclePlay />
									</motion.a>
								</div>
								<Separator />
								<div className="pt-4 relative p-4">
									<motion.div
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
									>
										{typeof active.content === "function" ? active.content() : active.content}
									</motion.div>
								</div>
							</div>
						</motion.div>
					</div>
				) : null}
			</AnimatePresence>
		</>
	);
}
