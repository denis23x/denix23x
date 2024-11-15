import { Review } from "./review";
import { User } from "./user";

export type Book = {
	id: number;
	title: string;
	description: string;
	cover: string | null;
	format: string;
	genre: string;
	publisher: string;
	createdAt: string;
	updatedAt: string;
	userId?: number;
	user?: User;
	reviews?: Review[];
};
