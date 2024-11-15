import { z } from "zod";

export const userSchema = z.object({
	name: z.string().min(2),
	bio: z.string().min(4),
	email: z.string().email(),
});
