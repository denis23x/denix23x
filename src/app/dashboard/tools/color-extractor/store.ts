import { create, StoreApi, UseBoundStore } from "zustand";
import wave from "~/dashboard/tools/color-extractor/wave.webp";

interface StoreState {
	image: string | ArrayBuffer | null;
	setImage: (image: string | ArrayBuffer | null) => void;
	imagePalette: string[];
	setImagePalette: (imagePalette: string[]) => void;
	imageColor: string;
	setImageColor: (imageColor: string) => void;
}

const useStore: UseBoundStore<StoreApi<StoreState>> = create<StoreState>(set => ({
	image: wave.src,
	setImage: (image: string | ArrayBuffer | null) => set(() => ({ image })),
	imagePalette: [],
	setImagePalette: (imagePalette: string[]) => set(() => ({ imagePalette })),
	imageColor: "",
	setImageColor: (imageColor: string) => set(() => ({ imageColor })),
}));

export default useStore;
