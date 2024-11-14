import { z } from "zod";

export const userSchema = z.object({
	avatar: z.string().nullable(),
	firstName: z.string().min(2),
	lastName: z.string().min(2),
	gender: z.string().min(2),
	sex: z.enum(["female", "male"]),
	bio: z.string().min(4),
	email: z.string().email(),
});
