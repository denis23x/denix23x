import { z } from "zod";

export const bookSchema = z.object({
	title: z.string().min(2),
	description: z.string().min(2),
	cover: z.string().nullable(),
	format: z.string().min(2),
	genre: z.string().min(2),
	publisher: z.string().min(2),
});
