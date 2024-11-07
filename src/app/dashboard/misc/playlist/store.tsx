import { create, StoreApi, UseBoundStore } from "zustand";
import { Card } from "./models/card";
import { nanoid } from "nanoid";

interface StoreState {
	active: Card | boolean | null;
	setActive: (active: Card | boolean | null) => void;
	cards: Card[];
	setCards: (cards: Card[]) => void;
}

const cards: Card[] = [
	{
		uid: nanoid(),
		description: "Slipknot",
		title: "Iowa",
		src: "/dashboard/misc/playlist/slipknot-iowa.webp",
		ctaText: "Youtube",
		ctaLink: "https://www.youtube.com/watch?v=qr5spx6mmYQ&list=OLAK5uy_koce7px0VmK1rsB31P4t9cKuVaa5hKpto",
		content: () => {
			return (
				<p>
					Iowa is the second studio album by American heavy metal band Slipknot. Produced by the band and Ross Robinson,
					it was released on August 28, 2001, by Roadrunner Records.
				</p>
			);
		},
	},
	{
		uid: nanoid(),
		description: "Mindless Self Indulgence",
		title: "If",
		src: "/dashboard/misc/playlist/mindless-self-indulgence-if.jpeg",
		ctaText: "Youtube",
		ctaLink: "https://www.youtube.com/watch?v=UR0UkTiKxmc&list=OLAK5uy_nIrlgjhPrToiPyKq0xHerkaVWz8xCzE3I",
		content: () => {
			return (
				<p>
					If is the fourth studio album by Mindless Self Indulgence. It was released through The End Records on April
					28, 2008 in the UK and on April 29, 2008 in the U.S.
				</p>
			);
		},
	},

	{
		uid: nanoid(),
		description: "Yellow Claw",
		title: "Blood For Mercy",
		src: "/dashboard/misc/playlist/yellow-claw-blood-for-mercy.jpeg",
		ctaText: "Youtube",
		ctaLink: "https://www.youtube.com/watch?v=W15FZGzFqog&list=OLAK5uy_mUAFk0KRJWvH_L_P0W01kmJNYx3rXc0ZU",
		content: () => {
			return <p>Blood for Mercy is the first studio album by Dutch electronic music ensemble Yellow Claw.</p>;
		},
	},
];

const useStore: UseBoundStore<StoreApi<StoreState>> = create<StoreState>(set => ({
	active: null,
	setActive: (active: Card | boolean | null) => set(() => ({ active })),
	cards: cards,
	setCards: (cards: Card[]) => set(() => ({ cards })),
}));

export default useStore;
