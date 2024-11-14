import { Prisma, PrismaClient } from "@prisma/client";
import { paginate } from "prisma-extension-pagination";
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";
import { ZodError } from "zod";

const handleErr = (error: unknown): { error: unknown; status: number } => {
	const status = (() => {
		switch (true) {
			case error instanceof ZodError: {
				return 422;
			}
			case error instanceof PrismaClientValidationError: {
				return 400;
			}
			case error instanceof PrismaClientKnownRequestError: {
				switch (error.code) {
					case "P2002": // Unique constraint failed
						return 409; // Conflict
					case "P2025": // Record not found
						return 404; // Not Found
					case "P2003": // Foreign key constraint failed
						return 400; // Bad Request
					case "P2001": // Record does not exist
						return 404; // Not Found
					case "P2014": // Constraint violation on update or delete
						return 400; // Bad Request
					default:
						return 500; // Internal Server Error for unhandled codes
				}
			}
			default: {
				return 500;
			}
		}
	})();

	return {
		error,
		status,
	};
};

// @ts-expect-error $extends does not exist
let prisma: typeof PrismaClient.$extends;

const clientOptions: Prisma.PrismaClientOptions = {
	errorFormat: "minimal",
};

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
	prisma = new PrismaClient(clientOptions).$extends(extendsPagination);
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient(clientOptions).$extends(extendsPagination);
	}

	prisma = global.prisma;
}

export { prisma, handleErr };
