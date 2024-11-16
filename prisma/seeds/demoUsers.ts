import { faker } from "@faker-js/faker/locale/en";

const demoUsersCount: number = 20;
const demoUsersSeed = () => {
	return Array.from({ length: demoUsersCount }, () => {
		const sex: string = faker.person.sex();
		const firstName: string = faker.person.firstName(sex as "female" | "male");
		const lastName: string = faker.person.lastName(sex as "female" | "male");
		const avatar: string | null = faker.datatype.boolean()
			? faker.image.urlPicsumPhotos({ width: 512, height: 512, grayscale: false, blur: 0 })
			: null;

		return {
			avatar,
			name: faker.internet.displayName({ firstName, lastName }),
			bio: faker.lorem.sentences({ min: 4, max: 6 }),
			email: faker.internet.email({ firstName, lastName }),
			createdAt: faker.date.recent(),
			updatedAt: faker.date.past(),
		};
	});
};

export default demoUsersSeed;
