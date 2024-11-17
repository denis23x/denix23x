import { z } from "zod";

export const postSchema = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
	cover: z.nullable(z.string().url()),
	tags: z.array(z.string().min(1)),
	userId: z.coerce.number().min(1),
});
