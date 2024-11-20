import type { demoUser, demoPost, demoComment } from "@prisma/client";
// import type { Id } from "../types/id";
import { GraphQLResolveInfo } from "graphql/type";
import { query } from "@/lib/database";
import { getSelect as select } from "../helpers/getters";

// type CreatePostInput = {
// 	input: demoPost;
// };
//
// type UpdatePostInput = {
// 	input: Partial<demoPost>;
// };

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
		// createPost: async (_: unknown, args: CreatePostInput,  ___: unknown, info: GraphQLResolveInfo) => {
		// 	return {};
		// },
		// updatePost: async (_: unknown, args: Id & UpdatePostInput, ___: unknown, info: GraphQLResolveInfo) => {
		// 	return {};
		// },
		// deletePost: async (_: unknown, args: Id, ___: unknown, info: GraphQLResolveInfo) => {
		// 	return {};
		// },
	}
}
