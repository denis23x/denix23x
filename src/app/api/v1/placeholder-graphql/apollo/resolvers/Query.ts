import type { demoUser, demoPost, demoComment } from "@prisma/client";
import type { Id } from "../types/id";
import type { List } from "../types/list";
import { GraphQLResolveInfo } from "graphql/type";
import { query } from "@/lib/database";
import { getSelect as select, getLike as like } from "../helpers/getters";

// prettier-ignore
export const Query = {
	user: async (_: unknown, args: Id, ___: unknown, info: GraphQLResolveInfo): Promise<demoUser> => {
		if (!Number(args.id)) {
			throw new Error("Cannot fetch user: id is invalid.");
		}

		return query(`SELECT ${select(info, "User")} FROM "demoUser" WHERE "id" = ${args.id}`).then(r => r.rows.shift());
	},
	users: async (_: unknown, args: List, ___: unknown, info: GraphQLResolveInfo): Promise<demoUser[]> => {
		return query(`SELECT ${select(info, "User")} FROM "demoUser" ${like(args, "name")} LIMIT ${args.limit} OFFSET ${args.offset}`).then(r => r.rows);
	},
	post: async (_: unknown, args: Id, ___: unknown, info: GraphQLResolveInfo): Promise<demoPost> => {
		if (!Number(args.id)) {
			throw new Error("Cannot fetch post: id is invalid.");
		}

		return query(`SELECT ${select(info, "Post")} FROM "demoPost" WHERE "id" = ${args.id}`).then(r => r.rows.shift());
	},
	posts: async (_: unknown, args: List, ___: unknown, info: GraphQLResolveInfo): Promise<demoPost[]> => {
		return query(`SELECT ${select(info, "Post")} FROM "demoPost" ${like(args, "title")} LIMIT ${args.limit} OFFSET ${args.offset}`).then(r => r.rows);
	},
	comment: async (_: unknown, args: Id, ___: unknown, info: GraphQLResolveInfo): Promise<demoComment> => {
		if (!Number(args.id)) {
			throw new Error("Cannot fetch comment: id is invalid.");
		}

		return query(`SELECT ${select(info, "Comment")} FROM "demoComment" WHERE "id" = ${args.id}`).then(r => r.rows.shift());
	},
	comments: async (_: unknown, args: List, ___: unknown, info: GraphQLResolveInfo): Promise<demoComment[]> => {
		return query(`SELECT ${select(info, "Comment")} FROM "demoComment" LIMIT ${args.limit} OFFSET ${args.offset}`).then(r => r.rows);
	},
};
