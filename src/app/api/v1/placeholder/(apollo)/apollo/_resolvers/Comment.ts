import type { demoUser, demoPost, demoComment } from "@prisma/client";
import { GraphQLResolveInfo } from "graphql/type";
import { query } from "@/lib/database";
import {
	getInsert as insert,
	getSelect as select,
	getSet as set,
} from "@/app/api/v1/placeholder/(apollo)/apollo/_helpers/getters";
import { commentSchema } from "@/app/api/v1/placeholder/_schemas/commentSchema";
import { GraphQLError } from "graphql/error";
import { z } from "zod";
import { idSchema } from "@/app/api/v1/placeholder/_schemas/IdSchema";
import type { Id } from "@/app/api/v1/placeholder/_types/id";
import { moderate, ModerationError } from "@/lib/openai";
import type { Moderation } from "openai/resources/moderations";

type CreateComment = {
	input: demoComment;
};

type UpdateComment = {
	input: Partial<demoComment>;
};

// prettier-ignore
export const CommentResolvers = {
	Comment: {
		post: async (parent: demoComment, __: unknown, ___: unknown, info: GraphQLResolveInfo): Promise<demoPost> => {
			if (!parent.postId) {
				throw new Error("Cannot fetch post: postId is missing in comments.");
			}

			return query(`SELECT ${select(info, "Post")} FROM "demoPost" WHERE "id" = ${parent.postId}`).then(r => r.rows.shift());
		},
		user: async (parent: demoComment, __: unknown, ___: unknown, info: GraphQLResolveInfo): Promise<demoUser> => {
			if (!parent.userId) {
				throw new Error("Cannot fetch user: userId is missing in comments.");
			}

			return query(`SELECT ${select(info, "User")} FROM "demoUser" WHERE "id" = ${parent.userId}`).then(r => r.rows.shift());
		},
	},
	Mutation: {
		createComment: async (_: unknown, args: CreateComment, ___: unknown, info: GraphQLResolveInfo) => {
			try {
				const data = commentSchema.parse(args.input);

				if ((await moderate(data)).results.some((m: Moderation) => m.flagged)) {
					throw new ModerationError();
				}

				return await query(`INSERT INTO "demoComment" ${insert<z.infer<typeof commentSchema>>(data)} RETURNING ${select(info, "Comment")};`).then(r => r.rows.shift());
			} catch (error: unknown) {
				throw new GraphQLError('createComment error', {
					extensions: {
						error,
					},
				});
			}
		},
		updateComment: async (_: unknown, args: Id & UpdateComment, ___: unknown, info: GraphQLResolveInfo) => {
			try {
				const data = commentSchema.omit({ userId: true, postId: true }).partial().parse(args.input);

				if ((await moderate(data)).results.some((m: Moderation) => m.flagged)) {
					throw new ModerationError();
				}

				return await query(`UPDATE "demoComment" SET ${set<z.infer<typeof commentSchema>>(data)}, "updatedAt" = NOW() WHERE "id" = ${idSchema.parse(args).id} RETURNING ${select(info, "Comment")};`).then(r => r.rows.shift());
			} catch (error: unknown) {
				throw new GraphQLError('updateComment error', {
					extensions: {
						error,
					},
				});
			}
		},
		deleteComment: async (_: unknown, args: Id, ___: unknown, info: GraphQLResolveInfo) => {
			try {
				return await query(`DELETE FROM "demoComment" WHERE "id" = ${idSchema.parse(args).id} RETURNING ${select(info, "Comment")};`).then(r => r.rows.shift());
			} catch (error: unknown) {
				throw new GraphQLError('deleteComment error', {
					extensions: {
						error,
					},
				});
			}
		},
	},
};
