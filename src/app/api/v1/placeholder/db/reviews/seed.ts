import type { Review } from "./schema";
import type { User } from "../users/schema";
import type { Book } from "../books/schema";
import { faker } from "@faker-js/faker/locale/en";
import { nanoid } from "nanoid";

const reviewsCount: number = 400;
const reviewsSeed = (users: Record<string, User>, books: Record<string, Book>) => {
	const u: User[] = Object.values(users);
	const uLength: number = u.length - 1;

	const b: Book[] = Object.values(books);
	const bLength: number = b.length - 1;

	const reviewsList: Review[] = Array.from({ length: reviewsCount }, () => {
		const user: User = u[faker.number.int({ min: 1, max: uLength })];
		const book: Book = b[faker.number.int({ min: 1, max: bLength })];
		const emoji: string = faker.internet.emoji();

		return {
			uid: nanoid(),
			userUid: user.uid,
			bookUid: book.uid,
			message: faker.lorem.sentence() + emoji,
			rating: faker.number.int({ min: 1, max: 5 }),
			createdAt: faker.date.recent().toString(),
			updatedAt: faker.date.past().toString(),
		};
	});

	const reviewsObject: Record<string, Review> = reviewsList.reduce((acc: Record<string, Review>, review: Review) => {
		acc[review.uid] = review;

		return acc;
	}, {});

	return reviewsObject;
};

export default reviewsSeed;
