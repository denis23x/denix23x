import { faker } from "@faker-js/faker/locale/en";
import { Book, User } from "@/app/api/v1/placeholder/models";

const users = () => {
	const users: number = 20;
	const usersList: User[] = Array.from({ length: users }, (_, i) => {
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

const books = () => {
	const books: number = 100;
	const booksList: Book[] = Array.from({ length: books }, (_, i) => {
		const userId: number = usersObject[faker.number.int({ min: 1, max: 20 })].id;

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

export const usersObject: Record<string, User> = users();
export const booksObject: Record<string, Book> = books();
