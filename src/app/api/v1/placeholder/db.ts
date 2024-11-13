import { faker } from "@faker-js/faker/locale/en";

// -- Schemas

export type Book = {
	id: number;
	userId: number;
	title: string;
	cover: string;
	author: string;
	format: string;
	genre: string;
	publisher: string;
	series: string;
	createdAt: string;
	updatedAt: string;
};

export type Review = {
	id: number;
	userId: number;
	bookId: number;
	message: string;
	rating: number;
	createdAt: string;
	updatedAt: string;
};

export type User = {
	id: number;
	avatar: string;
	firstName: string;
	lastName: string;
	gender: string;
	sex: string;
	bio: string;
	email: string;
	createdAt: string;
	updatedAt: string;
};

// -- Data

const usersCount: number = 20;
const users = () => {
	const usersList: User[] = Array.from({ length: usersCount }, (_, i) => {
		const sex: string = faker.person.sex();
		const firstName: string = faker.person.firstName(sex as "female" | "male");
		const lastName: string = faker.person.lastName(sex as "female" | "male");

		return {
			id: i + 1,
			avatar: faker.image.urlPicsumPhotos({ width: 512, height: 512, grayscale: false, blur: 0 }),
			firstName,
			lastName,
			gender: faker.person.gender(),
			sex,
			bio: faker.person.bio(),
			email: faker.internet.email({ firstName, lastName }),
			createdAt: faker.date.recent().toString(),
			updatedAt: faker.date.past().toString(),
		};
	});

	const usersObject: Record<string, User> = usersList.reduce((acc: Record<string, User>, user: User) => {
		acc[user.id] = user;

		return acc;
	}, {});

	return usersObject;
};

const booksCount: number = 100;
const books = () => {
	const booksList: Book[] = Array.from({ length: booksCount }, (_, i) => {
		const userId: number = usersObject[faker.number.int({ min: 1, max: usersCount })].id;

		return {
			id: i + 1,
			userId,
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
		acc[book.id] = book;

		return acc;
	}, {});

	return booksObject;
};

const reviewsCount: number = 400;
const reviews = () => {
	const reviewsList: Review[] = Array.from({ length: reviewsCount }, (_, i) => {
		const userId: number = usersObject[faker.number.int({ min: 1, max: usersCount })].id;
		const bookId: number = booksObject[faker.number.int({ min: 1, max: booksCount })].id;

		return {
			id: i + 1,
			userId,
			bookId,
			message: faker.lorem.sentence(),
			rating: faker.number.int({ min: 1, max: 5 }),
			createdAt: faker.date.recent().toString(),
			updatedAt: faker.date.past().toString(),
		};
	});

	const reviewsObject: Record<string, Review> = reviewsList.reduce((acc: Record<string, Review>, review: Review) => {
		acc[review.id] = review;

		return acc;
	}, {});

	return reviewsObject;
};

// -- Export

export const usersObject: Record<string, User> = users();
export const booksObject: Record<string, Book> = books();
export const reviewsObject: Record<string, Review> = reviews();
