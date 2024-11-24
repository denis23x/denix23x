import type { demoUser, demoPost, demoComment } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql/type";
import { query } from "@/lib/database";
import {
	getInsert as insert,
	getSelect as select,
	getSet as set,
} from "@/app/api/v1/placeholder/(apollo)/apollo/_helpers/getters";
import { postSchema } from "@/app/api/v1/placeholder/_schemas/postsSchema";
import { GraphQLError } from "graphql/error";
import { z } from "zod";
import { idSchema } from "@/app/api/v1/placeholder/_schemas/IdSchema";
import type { Id } from "@/app/api/v1/placeholder/_types/id";
import { moderate, ModerationError } from "@/lib/openai";
import type { Moderation } from "openai/resources/moderations";

type CreatePost = {
	input: demoPost;
};

type UpdatePost = {
	input: Partial<demoPost>;
};

// prettier-ignore
export const PostResolvers = {
	Post: {
		comments: async (parent: demoPost, __: unknown, ___: unknown, info: GraphQLResolveInfo): Promise<demoComment[]> => {
			if (!parent.id) {
				throw new Error("Cannot fetch comments: id is missing in posts.");
			}

			return query(`SELECT ${select(info, "Comment")} FROM "demoComment" WHERE "postId" = ${parent.id}`).then(r => r.rows);
		},
		user: async (parent: demoComment, __: unknown, ___: unknown, info: GraphQLResolveInfo): Promise<demoUser> => {
			if (!parent.userId) {
				throw new Error("Cannot fetch user: userId is missing in posts.");
			}

			return query(`SELECT ${select(info, "User")} FROM "demoUser" WHERE "id" = ${parent.userId}`).then(r => r.rows.shift());
		},
	},
	Mutation: {
		createPost: async (_: unknown, args: CreatePost,  ___: unknown, info: GraphQLResolveInfo) => {
			try {
				const data = postSchema.parse(args.input);

				if ((await moderate(data)).results.some((m: Moderation) => m.flagged)) {
					throw new ModerationError();
				}

				return await query(`INSERT INTO "demoPost" ${insert<z.infer<typeof postSchema>>(data)} RETURNING ${select(info, "Post")};`).then(r => r.rows.shift());
			} catch (error: unknown) {
				throw new GraphQLError('createPost error', {
					extensions: {
						error,
					},
				});
			}
		},
		updatePost: async (_: unknown, args: Id & UpdatePost, ___: unknown, info: GraphQLResolveInfo) => {
			try {
				const data = postSchema.omit({ userId: true }).partial().parse(args.input);

				if ((await moderate(data)).results.some((m: Moderation) => m.flagged)) {
					throw new ModerationError();
				}

				return await query(`UPDATE "demoPost" SET ${set<z.infer<typeof postSchema>>(data)}, "updatedAt" = NOW() WHERE "id" = ${idSchema.parse(args).id} RETURNING ${select(info, "Post")};`).then(r => r.rows.shift());
			} catch (error: unknown) {
				throw new GraphQLError('updatePost error', {
					extensions: {
						error,
					},
				});
			}
		},
		deletePost: async (_: unknown, args: Id, ___: unknown, info: GraphQLResolveInfo) => {
			try {
				return await query(`DELETE FROM "demoPost" WHERE "id" = ${idSchema.parse(args).id} RETURNING ${select(info, "Post")};`).then(r => r.rows.shift());
			} catch (error: unknown) {
				throw new GraphQLError('deletePost error', {
					extensions: {
						error,
					},
				});
			}
		},
	}
}
