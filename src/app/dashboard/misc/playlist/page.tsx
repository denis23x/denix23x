"use client";

import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Separator } from "@/components/ui/separator";

export default function ExpandableCardDemo() {
	const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
	const id = useId();
	const ref = useRef<HTMLDivElement>(null);

	const cards = [
		{
			description: "Slipknot",
			title: "Iowa",
			src: "https://upload.wikimedia.org/wikipedia/en/1/1d/Slipknot_Iowa.jpg",
			ctaText: "Play",
			ctaLink: "https://www.youtube.com/watch?v=qr5spx6mmYQ&list=OLAK5uy_koce7px0VmK1rsB31P4t9cKuVaa5hKpto",
			content: () => {
				return (
					<p>
						Iowa is the second studio album by American heavy metal band Slipknot. Produced by the band and Ross
						Robinson, it was released on August 28, 2001, by Roadrunner Records. The title derives from the band's home
						state, Iowa, which members have stated is one of their greatest sources of inspiration.
					</p>
				);
			},
		},
		{
			description: "Yellow Claw",
			title: "Blood For Mercy",
			src: "https://upload.wikimedia.org/wikipedia/en/a/af/Blood_for_Mercy.jpg",
			ctaText: "Play",
			ctaLink: "https://www.youtube.com/watch?v=W15FZGzFqog&list=OLAK5uy_mUAFk0KRJWvH_L_P0W01kmJNYx3rXc0ZU",
			content: () => {
				return <p>Blood for Mercy is the first studio album by Dutch electronic music ensemble Yellow Claw.</p>;
			},
		},
	];

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
		<div className={"flex flex-1 flex-col gap-4 p-4 pt-0"}>
			<h1 className={"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"}>Playlist</h1>
			<p className={"leading-7"}>
				This page offers a curated selection of my favorite albums, showcasing a range of genres and artists that
				inspire me. Discover albums that have left a lasting impact, with insights on standout tracks and what makes
				each one unique. Dive into a blend of sounds and styles, perfect for expanding your musical horizons or simply
				finding your next favorite playlist.
			</p>
			<Separator />
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
							key={`button-${active.title}-${id}`}
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
						></motion.button>
						<motion.div
							layoutId={`card-${active.title}-${id}`}
							ref={ref}
							className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
						>
							<motion.div layoutId={`image-${active.title}-${id}`}>
								<img
									width={200}
									height={200}
									src={active.src}
									alt={active.title}
									className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
								/>
								{/*<Image*/}
								{/*	priority*/}
								{/*	width={200}*/}
								{/*	height={200}*/}
								{/*	src={active.src}*/}
								{/*	alt={active.title}*/}
								{/*	className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"*/}
								{/*/>*/}
							</motion.div>

							<div>
								<div className="flex justify-between items-start p-4">
									<div className="">
										<motion.h3
											layoutId={`title-${active.title}-${id}`}
											className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
										>
											{active.title}
										</motion.h3>
										<motion.p
											layoutId={`description-${active.description}-${id}`}
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
										href={active.ctaLink}
										target="_blank"
										className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
									>
										{active.ctaText}
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
			<ul className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 items-start gap-4">
				{cards.map((card, index) => (
					<motion.div
						layoutId={`card-${card.title}-${id}`}
						key={card.title}
						onClick={() => setActive(card)}
						className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
					>
						<div className="flex gap-4 flex-col  w-full">
							<motion.div layoutId={`image-${card.title}-${id}`}>
								<img
									width={100}
									height={100}
									src={card.src}
									alt={card.title}
									className="h-40 w-full  rounded-lg object-cover object-top"
								/>
								{/*<Image*/}
								{/*	width={100}*/}
								{/*	height={100}*/}
								{/*	src={card.src}*/}
								{/*	alt={card.title}*/}
								{/*	className="h-40 w-full  rounded-lg object-cover object-top"*/}
								{/*/>*/}
							</motion.div>
							<div className="flex justify-center items-center flex-col">
								<motion.h3
									layoutId={`title-${card.title}-${id}`}
									className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
								>
									{card.title}
								</motion.h3>
								<motion.p
									layoutId={`description-${card.description}-${id}`}
									className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
								>
									{card.description}
								</motion.p>
							</div>
						</div>
					</motion.div>
				))}
			</ul>
		</div>
	);
}
