import { z } from "zod";

export const userSchema = z.object({
	avatar: z.nullable(z.string().url()),
	name: z.string().min(1),
	bio: z.string().min(1),
	email: z.string().email(),
});
