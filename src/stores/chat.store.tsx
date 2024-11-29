import { create, StoreApi, UseBoundStore } from "zustand";

interface StoreState {
	userUid: string | null;
	setUserUid: (userUid: string | null) => void;
}

const useStore: UseBoundStore<StoreApi<StoreState>> = create<StoreState>(set => ({
	userUid: null,
	setUserUid: (userUid: string | null) => set(() => ({ userUid })),
}));

export default useStore;
