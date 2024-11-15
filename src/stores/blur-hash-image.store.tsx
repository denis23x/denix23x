import { create, StoreApi, UseBoundStore } from "zustand";
import wave from "~/dashboard/tools/color-extractor/wave.webp";

interface StoreState {
	image: string | ArrayBuffer | null;
	setImage: (image: string | ArrayBuffer | null) => void;
	optimization: number;
	setOptimization: (optimization: number) => void;
	blurHash: string;
	setBlurHash: (blurHash: string) => void;
	blurHashDataURL: string;
	setBlurHashDataURL: (blurHashDataURL: string) => void;
}

const useStore: UseBoundStore<StoreApi<StoreState>> = create<StoreState>(set => ({
	image: wave.src,
	setImage: (image: string | ArrayBuffer | null) => set(() => ({ image })),
	optimization: 5,
	setOptimization: (optimization: number) => set(() => ({ optimization })),
	blurHash: "",
	setBlurHash: (blurHash: string) => set(() => ({ blurHash })),
	blurHashDataURL: "",
	setBlurHashDataURL: (blurHashDataURL: string) => set(() => ({ blurHashDataURL })),
}));

export default useStore;
