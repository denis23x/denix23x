import { create, StoreApi, UseBoundStore } from "zustand";

interface StoreState {
	input: string;
	setInput: (input: string) => void;
	output: string;
	setOutput: (output: string) => void;
}

const useStore: UseBoundStore<StoreApi<StoreState>> = create<StoreState>(set => ({
	input: "",
	setInput: (input: string) => set(() => ({ input })),
	output: "",
	setOutput: (output: string) => set(() => ({ output })),
}));

export default useStore;
