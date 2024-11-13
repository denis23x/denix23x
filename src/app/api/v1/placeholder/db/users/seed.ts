import type { User } from "./schema";
import { faker } from "@faker-js/faker/locale/en";
import { nanoid } from "nanoid";

const usersCount: number = 20;
const usersSeed = () => {
	const usersList: User[] = Array.from({ length: usersCount }, () => {
		const sex: string = faker.person.sex();
		const firstName: string = faker.person.firstName(sex as "female" | "male");
		const lastName: string = faker.person.lastName(sex as "female" | "male");

		return {
			uid: nanoid(),
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
		acc[user.uid] = user;

		return acc;
	}, {});

	return usersObject;
};

export default usersSeed;
