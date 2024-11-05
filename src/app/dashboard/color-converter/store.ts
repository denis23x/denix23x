import { create, StoreApi, UseBoundStore } from "zustand";
import { colord } from "colord";

interface StoreState {
	color: string;
	setColor: (color: string) => void;
}

const useStore: UseBoundStore<StoreApi<StoreState>> = create<StoreState>(set => ({
	color: "",
	setColor: (c: string) => set(() => ({ color: c.startsWith("rgba") ? c : colord(c).toRgbString() })),
}));

export default useStore;
