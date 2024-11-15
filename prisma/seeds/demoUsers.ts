import { faker } from "@faker-js/faker/locale/en";

const demoUsersCount: number = 20;
const demoUsersSeed = () => {
	return Array.from({ length: demoUsersCount }, () => {
		const sex: string = faker.person.sex();
		const firstName: string = faker.person.firstName(sex as "female" | "male");
		const lastName: string = faker.person.lastName(sex as "female" | "male");

		return {
			name: faker.internet.displayName({ firstName, lastName }),
			bio: faker.person.bio(),
			email: faker.internet.email({ firstName, lastName }),
			createdAt: faker.date.recent(),
			updatedAt: faker.date.past(),
		};
	});
};

export default demoUsersSeed;
