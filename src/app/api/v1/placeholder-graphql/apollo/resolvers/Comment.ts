import type { demoUser, demoPost, demoComment } from "@prisma/client";
import type { Id } from "../types/id";
import { GraphQLResolveInfo } from "graphql/type";
import { query } from "@/lib/database";
import { getInsert as insert, getSelect as select, getSet as set } from "../helpers/getters";

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
			return await query(`INSERT INTO "demoComment" ${insert<demoComment>(args.input)} RETURNING ${select(info, "Comment")};`).then(r => r.rows.shift());
		},
		updateComment: async (_: unknown, args: Id & UpdateComment, ___: unknown, info: GraphQLResolveInfo) => {
			return await query(`UPDATE "demoComment" SET ${set<demoComment>(args.input)}, "updatedAt" = NOW() WHERE "id" = ${args.id} RETURNING ${select(info, "Comment")};`).then(r => r.rows.shift());
		},
		deleteComment: async (_: unknown, args: Id, ___: unknown, info: GraphQLResolveInfo) => {
			return await query(`DELETE FROM "demoComment" WHERE "id" = ${args.id} RETURNING ${select(info, "Comment")};`).then(r => r.rows.shift());
		},
	},
};
