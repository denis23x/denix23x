import { User } from "./user";
import { Book } from "./book";

export type Review = {
	id: number;
	message: string;
	rating: number;
	createdAt: string;
	updatedAt: string;
	bookId?: number;
	book?: Book;
	userId?: number;
	user?: User;
};
