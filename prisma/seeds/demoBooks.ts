import { type demoUser, PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker/locale/en";

const prisma = new PrismaClient();

const demoBooksCount: number = 100;
const demoBooksSeed = async () => {
	const u: Pick<demoUser, "id">[] = await prisma.demoUser.findMany({
		select: {
			id: true,
		},
	});
	const uLength: number = u.length - 1;

	return Array.from({ length: demoBooksCount }, () => {
		const user: Pick<demoUser, "id"> = u[faker.number.int({ min: 1, max: uLength })];
		const cover: string | null = faker.datatype.boolean()
			? faker.image.urlPicsumPhotos({ width: 512, height: 512, grayscale: false, blur: 0 })
			: null;

		return {
			userId: user.id,
			title: faker.lorem.words({ min: 2, max: 4 }),
			description: faker.lorem.paragraphs({ min: 4, max: 6 }),
			cover,
			genre: faker.lorem.word(),
			createdAt: faker.date.recent(),
			updatedAt: faker.date.past(),
		};
	});
};

export default demoBooksSeed;
