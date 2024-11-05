import { create, StoreApi, UseBoundStore } from "zustand";

interface StoreState {
	loremCount: number;
	setLoremCount: (loremCount: number) => void;
	loremGenerate: string;
	setLoremGenerate: (loremGenerate: string) => void;
	loremIpsum: string;
	setLoremIpsum: (loremIpsum: string) => void;
}

const useStore: UseBoundStore<StoreApi<StoreState>> = create<StoreState>(set => ({
	loremCount: 4,
	setLoremCount: (loremCount: number) => set(() => ({ loremCount })),
	loremGenerate: "generate-sentences",
	setLoremGenerate: (loremGenerate: string) => set(() => ({ loremGenerate })),
	loremIpsum: "Loading...",
	setLoremIpsum: (loremIpsum: string) => set(() => ({ loremIpsum })),
}));

export default useStore;
