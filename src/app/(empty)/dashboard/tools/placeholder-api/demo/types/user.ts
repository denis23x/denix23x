import { Book } from "./book";
import { Review } from "./review";

export type User = {
	id: number;
	name: string;
	avatar: string | null;
	bio: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	books?: Book[];
	reviews?: Review[];
};
