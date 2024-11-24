import type { demoUser, demoPost, demoComment } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql/type";
import { query } from "@/lib/database";
import {
	getSelect as select,
	getInsert as insert,
	getSet as set,
} from "@/app/api/v1/placeholder/(apollo)/apollo/_helpers/getters";
import { userSchema } from "@/app/api/v1/placeholder/_schemas/usersSchema";
import { GraphQLError } from "graphql/error";
import { z } from "zod";
import { idSchema } from "@/app/api/v1/placeholder/_schemas/IdSchema";
import type { Id } from "@/app/api/v1/placeholder/_types/id";
import { moderate, ModerationError } from "@/lib/openai";
import type { Moderation } from "openai/resources/moderations";

type CreateUser = {
	input: demoUser;
};

type UpdateUser = {
	input: Partial<demoUser>;
};

// prettier-ignore
export const UserResolvers = {
	User: {
		posts: async (parent: demoUser, __: unknown, ___: unknown, info: GraphQLResolveInfo): Promise<demoPost[]> => {
			if (!parent.id) {
				throw new Error("Cannot fetch posts: id is missing in users.");
			}

			return query(`SELECT ${select(info, "Post")} FROM "demoPost" WHERE "userId" = ${parent.id}`).then(r => r.rows);
		},
		comments: async (parent: demoUser, __: unknown, ___: unknown, info: GraphQLResolveInfo): Promise<demoComment[]> => {
			if (!parent.id) {
				throw new Error("Cannot fetch comments: id is missing in users.");
			}

			return query(`SELECT ${select(info, "Comment")} FROM "demoComment" WHERE "userId" = ${parent.id}`).then(r => r.rows);
		},
	},
	Mutation: {
		createUser: async (_: unknown, args: CreateUser,  ___: unknown, info: GraphQLResolveInfo) => {
			try {
				const data = userSchema.parse(args.input);

				if ((await moderate(data)).results.some((m: Moderation) => m.flagged)) {
					throw new ModerationError();
				}

				return await query(`INSERT INTO "demoUser" ${insert<z.infer<typeof userSchema>>(data)} RETURNING ${select(info, "User")};`).then(r => r.rows.shift());
			} catch (error: unknown) {
				throw new GraphQLError('createUser error', {
					extensions: {
						error,
					},
				});
			}
		},
		updateUser: async (_: unknown, args: Id & UpdateUser, ___: unknown, info: GraphQLResolveInfo) => {
			try {
				const data = userSchema.partial().parse(args.input);

				if ((await moderate(data)).results.some((m: Moderation) => m.flagged)) {
					throw new ModerationError();
				}

				return await query(`UPDATE "demoUser" SET ${set<z.infer<typeof userSchema>>(data)}, "updatedAt" = NOW() WHERE "id" = ${idSchema.parse(args).id} RETURNING ${select(info, "User")};`).then(r => r.rows.shift());
			} catch (error: unknown) {
				throw new GraphQLError('updateUser error', {
					extensions: {
						error,
					},
				});
			}
		},
		deleteUser: async (_: unknown, args: Id, ___: unknown, info: GraphQLResolveInfo) => {
			try {
				return await query(`DELETE FROM "demoUser" WHERE "id" = ${idSchema.parse(args).id} RETURNING ${select(info, "User")};`).then(r => r.rows.shift());
			} catch (error: unknown) {
				throw new GraphQLError('deleteUser error', {
					extensions: {
						error,
					},
				});
			}
		},
	}
};
