import type { demoUser, demoPost, demoComment } from "@prisma/client";
// import type { Id } from "../types/id";
import { GraphQLResolveInfo } from "graphql/type";
import { query } from "@/lib/database";
import { getSelect as select } from "../helpers/getters";

// type CreateCommentInput = {
// 	input: demoComment;
// };
//
// type UpdateCommentInput = {
// 	input: Partial<demoComment>;
// };

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
		// createComment: async (_: unknown, args: CreateCommentInput, ___: unknown, info: GraphQLResolveInfo) => {
		// 	return {};
		// },
		// updateComment: async (_: unknown, args: Id & UpdateCommentInput, ___: unknown, info: GraphQLResolveInfo) => {
		// 	return {};
		// },
		// deleteComment: async (_: unknown, args: Id, ___: unknown, info: GraphQLResolveInfo) => {
		// 	return {};
		// },
	},
};
