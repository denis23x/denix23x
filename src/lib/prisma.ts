import { PrismaClient } from "@prisma/client";
import { paginate } from "prisma-extension-pagination";

// @ts-expect-error $extends does not exist
let prisma: typeof PrismaClient.$extends;

const extendsPagination = {
	model: {
		demoBook: {
			paginate,
		},
		demoReview: {
			paginate,
		},
		demoUser: {
			paginate,
		},
	},
};

if (process.env.NODE_ENV === "production") {
	prisma = new PrismaClient().$extends(extendsPagination);
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient().$extends(extendsPagination);
	}

	prisma = global.prisma;
}

export { prisma };
