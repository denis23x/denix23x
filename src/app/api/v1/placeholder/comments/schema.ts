import { z } from "zod";

export const commentSchema = z.object({
	userId: z.coerce.number().min(1),
	postId: z.coerce.number().min(1),
	message: z.string().min(1),
	rating: z.number().min(1).max(5),
});
