import { create, StoreApi, UseBoundStore } from "zustand";
import { nanoid } from "nanoid";

interface StoreState {
	userUid: string;
}

const useStore: UseBoundStore<StoreApi<StoreState>> = create<StoreState>(() => ({
	userUid: nanoid(),
}));

export default useStore;
