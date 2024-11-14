import { type demoUser, type demoBook, PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker/locale/en";

const prisma = new PrismaClient();

const demoReviewsCount: number = 500;
const demoReviewsSeed = async () => {
	const u: Pick<demoUser, "id">[] = await prisma.demoUser.findMany({
		select: {
			id: true,
		},
	});
	const uLength: number = u.length - 1;

	const b: Pick<demoBook, "id">[] = await prisma.demoBook.findMany({
		select: {
			id: true,
		},
	});
	const bLength: number = b.length - 1;

	return Array.from({ length: demoReviewsCount }, (_, i) => {
		const user: Pick<demoUser, "id"> = u[faker.number.int({ min: 1, max: uLength })];
		const book: Pick<demoBook, "id"> = b[faker.number.int({ min: 1, max: bLength })];
		const emoji: string[] = Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => faker.internet.emoji());
		const message: string = `${faker.lorem.sentence()} ${emoji.join(" ")}`;

		return {
			id: i + 1,
			userId: user.id,
			bookId: book.id,
			message,
			rating: faker.number.int({ min: 1, max: 5 }),
			createdAt: faker.date.recent(),
			updatedAt: faker.date.past(),
		};
	});
};

export default demoReviewsSeed;
