import { create, StoreApi, UseBoundStore } from "zustand";

interface StoreState {
	text: string;
	setText: (text: string) => void;
	width: number;
	setWidth: (width: number) => void;
	height: number;
	setHeight: (width: number) => void;
	background: string;
	setBackground: (width: string) => void;
	color: string;
	setColor: (width: string) => void;
	canvas: HTMLCanvasElement | null;
	setCanvas: (canvas: HTMLCanvasElement | null) => void;
}

const useStore: UseBoundStore<StoreApi<StoreState>> = create<StoreState>(set => ({
	text: "",
	setText: (text: string) => set(() => ({ text })),
	width: 512,
	setWidth: (width: number) => set(() => ({ width })),
	height: 512,
	setHeight: (height: number) => set(() => ({ height })),
	background: "transparent",
	setBackground: (background: string) => set(() => ({ background })),
	color: "transparent",
	setColor: (color: string) => set(() => ({ color })),
	canvas: null,
	setCanvas: (canvas: HTMLCanvasElement | null) => set(() => ({ canvas })),
}));

export default useStore;
