import { Prisma, PrismaClient } from "@prisma/client";
import { paginate } from "prisma-extension-pagination";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import dotenv from "dotenv";
import ws from "ws";

dotenv.config();

const prismaInstance = () => {
	neonConfig.webSocketConstructor = ws;

	const connectionString = `${process.env.DATABASE_URL}`;
	const pool = new Pool({ connectionString });

	const clientOptions: Prisma.PrismaClientOptions = {
		errorFormat: "minimal",
		adapter: new PrismaNeon(pool),
	};

	const extendsPagination = {
		model: {
			demoPost: {
				paginate,
			},
			demoComment: {
				paginate,
			},
			demoUser: {
				paginate,
			},
		},
	};

	return new PrismaClient(clientOptions).$extends(extendsPagination);
};

// @ts-expect-error $extends does not exist
let prisma: typeof PrismaClient.$extends;

if (process.env.NODE_ENV === "production") {
	prisma = prismaInstance();
} else {
	if (!global.prisma) {
		global.prisma = prismaInstance();
	}

	prisma = global.prisma;
}

export { prisma };
