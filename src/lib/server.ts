import { ModerationError } from "@/lib/openai";
import { ZodError } from "zod";
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";

export const handleErr = (error: unknown): { error: unknown; status: number } => {
	const status = (() => {
		switch (true) {
			case error instanceof ModerationError: {
				return 422;
			}
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
