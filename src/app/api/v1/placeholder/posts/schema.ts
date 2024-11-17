import { z } from "zod";

export const postSchema = z.object({
	title: z.string().min(2),
	description: z.string().min(2),
	cover: z.string().nullable(),
	tags: z.string().min(2),
});
