import { faker } from "@faker-js/faker/locale/en";

const demoUsersCount: number = 20;
const demoUsersSeed = () => {
	return Array.from({ length: demoUsersCount }, (_, i) => {
		const sex: string = faker.person.sex();
		const firstName: string = faker.person.firstName(sex as "female" | "male");
		const lastName: string = faker.person.lastName(sex as "female" | "male");
		const avatar: string | null = faker.datatype.boolean()
			? faker.image.urlPicsumPhotos({ width: 512, height: 512, grayscale: false, blur: 0 })
			: null;

		return {
			id: i + 1,
			avatar,
			firstName,
			lastName,
			gender: faker.person.gender(),
			sex,
			bio: faker.person.bio(),
			email: faker.internet.email({ firstName, lastName }),
			createdAt: faker.date.recent(),
			updatedAt: faker.date.past(),
		};
	});
};

export default demoUsersSeed;
