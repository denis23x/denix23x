import { type demoUser, type demoPost, PrismaClient } from "@prisma/client";
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

	const p: Pick<demoPost, "id">[] = await prisma.demoPost.findMany({
		select: {
			id: true,
		},
	});
	const pLength: number = p.length - 1;

	return Array.from({ length: demoReviewsCount }, () => {
		const user: Pick<demoUser, "id"> = u[faker.number.int({ min: 1, max: uLength })];
		const post: Pick<demoPost, "id"> = p[faker.number.int({ min: 1, max: pLength })];

		return {
			userId: user.id,
			postId: post.id,
			message: faker.lorem.sentences({ min: 2, max: 4 }),
			rating: faker.number.int({ min: 1, max: 5 }),
			createdAt: faker.date.recent(),
			updatedAt: faker.date.past(),
		};
	});
};

export default demoReviewsSeed;
