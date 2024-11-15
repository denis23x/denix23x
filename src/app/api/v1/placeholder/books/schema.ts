import { z } from "zod";

export const bookSchema = z.object({
	title: z.string().min(2),
	description: z.string().min(2),
	cover: z.string().nullable(),
	genre: z.string().min(2),
});
