import type { Book } from "./schema";
import type { User } from "../users/schema";
import { faker } from "@faker-js/faker/locale/en";
import { nanoid } from "nanoid";

const booksCount: number = 100;
const booksSeed = (users: Record<string, User>) => {
	const u: User[] = Object.values(users);
	const uLength: number = u.length - 1;

	const booksList: Book[] = Array.from({ length: booksCount }, () => {
		const user: User = u[faker.number.int({ min: 1, max: uLength })];

		return {
			uid: nanoid(),
			userUid: user.uid,
			title: faker.book.title(),
			cover: faker.image.urlPicsumPhotos({ width: 512, height: 512, grayscale: false, blur: 0 }),
			author: faker.book.author(),
			format: faker.book.format(),
			genre: faker.book.genre(),
			publisher: faker.book.publisher(),
			series: faker.book.series(),
			createdAt: faker.date.recent().toString(),
			updatedAt: faker.date.past().toString(),
		};
	});

	const booksObject: Record<string, Book> = booksList.reduce((acc: Record<string, Book>, book: Book) => {
		acc[book.uid] = book;

		return acc;
	}, {});

	return booksObject;
};

export default booksSeed;
