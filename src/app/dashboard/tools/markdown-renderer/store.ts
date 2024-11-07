import { create, StoreApi, UseBoundStore } from "zustand";

interface StoreState {
	input: string;
	setInput: (input: string) => void;
}

const useStore: UseBoundStore<StoreApi<StoreState>> = create<StoreState>(set => ({
	input:
		"# Heading\n\nUllamco do dolore reprehenderit aute sit adipisicing exercitation tempor. Dolor officia sint magna velit incididunt excepteur aliqua est ex dolor nostrud tempor.",
	setInput: (input: string) => set(() => ({ input })),
}));

export default useStore;
