import { z } from "zod";

export const reviewSchema = z.object({
	message: z.string().min(2),
	rating: z.number().min(1).max(5),
});
