import { PrismaClient } from "@prisma/client";
import demoPostsSeed from "./seeds/demoPosts";
import demoCommentsSeed from "./seeds/demoComments";
import demoUsersSeed from "./seeds/demoUsers";

const prisma = new PrismaClient();

const main = async () => {
	await prisma.$transaction([
		prisma.demoComment.deleteMany(),
		prisma.demoPost.deleteMany(),
		prisma.demoUser.deleteMany(),
	]);

	// Seed

	await prisma.demoUser.createMany({
		data: demoUsersSeed(),
		skipDuplicates: true,
	});

	await prisma.demoPost.createMany({
		data: await demoPostsSeed(),
		skipDuplicates: true,
	});

	await prisma.demoComment.createMany({
		data: await demoCommentsSeed(),
		skipDuplicates: true,
	});
};

main()
	.catch(error => {
		console.log(error);
		process.exit(1);
	})
	.finally(async () => await prisma.$disconnect());
