import type { demoUser, demoPost, demoComment } from "@prisma/client";
import type { Id } from "../types/id";
import { GraphQLResolveInfo } from "graphql/type";
import { query } from "@/lib/database";
import { getSelect as select, getInsert as insert, getSet as set } from "../helpers/getters";

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
			return await query(`INSERT INTO "demoUser" ${insert<demoUser>(args.input)} RETURNING ${select(info, "User")};`).then(r => r.rows.shift());
		},
		updateUser: async (_: unknown, args: Id & UpdateUser, ___: unknown, info: GraphQLResolveInfo) => {
			return await query(`UPDATE "demoUser" SET ${set<demoUser>(args.input)}, "updatedAt" = NOW() WHERE "id" = ${args.id} RETURNING ${select(info, "User")};`).then(r => r.rows.shift());
		},
		deleteUser: async (_: unknown, args: Id, ___: unknown, info: GraphQLResolveInfo) => {
			return await query(`DELETE FROM "demoUser" WHERE "id" = ${args.id} RETURNING ${select(info, "User")};`).then(r => r.rows.shift());
		},
	}
};
