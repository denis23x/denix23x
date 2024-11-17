import { Prisma, PrismaClient } from "@prisma/client";
import { paginate } from "prisma-extension-pagination";
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";
import { ZodError } from "zod";
import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import dotenv from "dotenv";
import ws from "ws";

dotenv.config();

const handleErr = (error: unknown): { error: unknown; status: number } => {
	const status = (() => {
		switch (true) {
			case error instanceof ZodError:
			case error instanceof PrismaClientValidationError: {
				return 400;
			}
			case error instanceof PrismaClientKnownRequestError: {
				switch (error.code) {
					case "P2002": // Unique constraint failed
						return 409; // Conflict
					case "P2025": // Record not found
					case "P2001": // Record does not exist
						return 404; // Not Found
					case "P2003": // Foreign key constraint failed
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

export { prisma, handleErr };
