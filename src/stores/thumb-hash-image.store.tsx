import { create, StoreApi, UseBoundStore } from "zustand";
import wave from "~/dashboard/tools/color-extractor/wave.webp";

interface StoreState {
	image: string | ArrayBuffer | null;
	setImage: (image: string | ArrayBuffer | null) => void;
	thumbHash: Uint8Array | null;
	setThumbHash: (thumbHash: Uint8Array | null) => void;
	thumbHashDataURL: string;
	setThumbHashDataURL: (thumbHashDataURL: string) => void;
}

const useStore: UseBoundStore<StoreApi<StoreState>> = create<StoreState>(set => ({
	image: wave.src,
	setImage: (image: string | ArrayBuffer | null) => set(() => ({ image })),
	thumbHash: null,
	setThumbHash: (thumbHash: Uint8Array | null) => set(() => ({ thumbHash })),
	thumbHashDataURL: "",
	setThumbHashDataURL: (thumbHashDataURL: string) => set(() => ({ thumbHashDataURL })),
}));

export default useStore;
