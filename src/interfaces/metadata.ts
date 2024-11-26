import type { Metadata as M } from "next";
import type { ReactNode } from "react";

export interface Metadata extends Omit<M, "other"> {
	other?: {
		icon: ReactNode;
	};
}
