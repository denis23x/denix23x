import { create, StoreApi, UseBoundStore } from "zustand";

interface StoreState {
	color: string;
	setColor: (color: string) => void;
}

const useStore: UseBoundStore<StoreApi<StoreState>> = create<StoreState>(set => ({
	color: "",
	setColor: (color: string) => set(() => ({ color })),
}));

export default useStore;
