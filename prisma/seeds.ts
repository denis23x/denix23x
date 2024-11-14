import { PrismaClient } from "@prisma/client";
import demoBooksSeed from "./seeds/demoBooks";
import demoReviewsSeed from "./seeds/demoReviews";
import demoUsersSeed from "./seeds/demoUsers";

const prisma = new PrismaClient();

const main = async () => {
	await prisma.$transaction([
		prisma.demoReview.deleteMany(),
		prisma.demoBook.deleteMany(),
		prisma.demoUser.deleteMany(),
	]);

	// Seed

	await prisma.demoUser.createMany({
		data: demoUsersSeed(),
		skipDuplicates: true,
	});

	await prisma.demoBook.createMany({
		data: await demoBooksSeed(),
		skipDuplicates: true,
	});

	await prisma.demoReview.createMany({
		data: await demoReviewsSeed(),
		skipDuplicates: true,
	});
};

main()
	.catch(error => {
		console.log(error);
		process.exit(1);
	})
	.finally(async () => await prisma.$disconnect());
