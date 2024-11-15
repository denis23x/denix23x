import { Book } from "./book";
import { Review } from "./review";

export type User = {
	id: number;
	name: string;
	bio: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	books?: Book[];
	reviews?: Review[];
};
