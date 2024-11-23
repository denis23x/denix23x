import type { demoUser, demoPost, demoComment } from "@prisma/client";
import type { Id } from "@/app/api/v1/placeholder/(apollo)/apollo/_server/types/id";
import { GraphQLResolveInfo } from "graphql/type";
import { query } from "@/lib/database";
import {
	getInsert as insert,
	getSelect as select,
	getSet as set,
} from "@/app/api/v1/placeholder/(apollo)/apollo/_helpers/getters";

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
			return await query(`INSERT INTO "demoPost" ${insert<demoPost>(args.input)} RETURNING ${select(info, "Post")};`).then(r => r.rows.shift());
		},
		updatePost: async (_: unknown, args: Id & UpdatePost, ___: unknown, info: GraphQLResolveInfo) => {
			return await query(`UPDATE "demoPost" SET ${set<demoPost>(args.input)}, "updatedAt" = NOW() WHERE "id" = ${args.id} RETURNING ${select(info, "Post")};`).then(r => r.rows.shift());
		},
		deletePost: async (_: unknown, args: Id, ___: unknown, info: GraphQLResolveInfo) => {
			return await query(`DELETE FROM "demoPost" WHERE "id" = ${args.id} RETURNING ${select(info, "Post")};`).then(r => r.rows.shift());
		},
	}
}
