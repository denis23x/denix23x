import type { demoUser, demoPost, demoComment } from "@prisma/client";
import { ApolloServer, BaseContext } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { parseResolveInfo } from "graphql-parse-resolve-info";
import { query } from "@/lib/database";
import { GraphQLResolveInfo } from "graphql/type";
import { NextRequest } from "next/server";
import depthLimit from "graphql-depth-limit";

type Args = {
	limit: number;
	offset: number;
};

const getSelect = (info: GraphQLResolveInfo, name: string): string => {
	const p = parseResolveInfo(info);

	// @ts-expect-error unused vars
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { post, posts, user, users, comment, comments, ...fields } = p?.fieldsByTypeName[name] || {};

	return (
		Object.keys(fields)
			.map((field: string) => `"${field}"`)
			.join(", ") || "*"
	);
};

// GraphQL type definitions
const typeDefs: string = `#graphql
  type Post {
    id: ID!
    title: String!
    description: String!
    cover: String!
    tags: [String!]!
    createdAt: String!
    updatedAt: String!
    user: User!
    userId: Int!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    message: String!
    rating: String!
    createdAt: String!
    updatedAt: String!
    user: User!
    userId: Int!
    post: Post!
    postId: Int!
  }

  type User {
    id: ID!
    avatar: String!
    name: String!
    bio: String!
    email: String!
    createdAt: String!
    updatedAt: String!
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Query {
    users(limit: Int = 10, offset: Int = 0): [User!]!
    posts(limit: Int = 10, offset: Int = 0): [Post!]!
    comments(limit: Int = 10, offset: Int = 0): [Comment!]!
  }
`;

// prettier-ignore
const resolvers = {
	Query: {
		users: async (_: unknown, args: Args, ___: unknown, info: GraphQLResolveInfo): Promise<demoUser[]> => {
			return query(`SELECT ${getSelect(info, "User")} FROM "demoUser" LIMIT ${args.limit} OFFSET ${args.offset}`).then(r => r.rows);
		},
		posts: async (_: unknown, args: Args, ___: unknown, info: GraphQLResolveInfo): Promise<demoPost[]> => {
			return query(`SELECT ${getSelect(info, "Post")} FROM "demoPost" LIMIT ${args.limit} OFFSET ${args.offset}`).then(r => r.rows);
		},
		comments: async (_: unknown, args: Args, ___: unknown, info: GraphQLResolveInfo): Promise<demoComment[]> => {
			return query(`SELECT ${getSelect(info, "Comment")} FROM "demoComment" LIMIT ${args.limit} OFFSET ${args.offset}`).then(r => r.rows);
		},
	},
	User: {
		posts: async (parent: demoUser, __: unknown, ___: unknown, info: GraphQLResolveInfo): Promise<demoPost[]> => {
			if (!parent.id) {
				throw new Error("Cannot fetch posts: id is missing in users.");
			}

			return query(`SELECT ${getSelect(info, "Post")} FROM "demoPost" WHERE "userId" = ${parent.id}`).then(r => r.rows);
		},
		comments: async (parent: demoUser, __: unknown, ___: unknown, info: GraphQLResolveInfo): Promise<demoComment[]> => {
			if (!parent.id) {
				throw new Error("Cannot fetch comments: id is missing in users.");
			}

			return query(`SELECT ${getSelect(info, "Comment")} FROM "demoComment" WHERE "userId" = ${parent.id}`).then(r => r.rows);
		},
	},
	Post: {
		comments: async (parent: demoPost, __: unknown, ___: unknown, info: GraphQLResolveInfo): Promise<demoComment[]> => {
			if (!parent.id) {
				throw new Error("Cannot fetch comments: id is missing in posts.");
			}

			return query(`SELECT ${getSelect(info, "Comment")} FROM "demoComment" WHERE "postId" = ${parent.id}`).then(r => r.rows);
		},
		user: async (parent: demoComment, __: unknown, ___: unknown, info: GraphQLResolveInfo): Promise<demoUser> => {
			if (!parent.userId) {
				throw new Error("Cannot fetch user: userId is missing in posts.");
			}

			return query(`SELECT ${getSelect(info, "User")} FROM "demoUser" WHERE "id" = ${parent.userId}`).then(r => r.rows.shift());
		},
	},
	Comment: {
		post: async (parent: demoComment, __: unknown, ___: unknown, info: GraphQLResolveInfo): Promise<demoPost> => {
			if (!parent.postId) {
				throw new Error("Cannot fetch post: postId is missing in comments.");
			}

			return query(`SELECT ${getSelect(info, "Post")} FROM "demoPost" WHERE "id" = ${parent.postId}`).then(r => r.rows.shift());
		},
		user: async (parent: demoComment, __: unknown, ___: unknown, info: GraphQLResolveInfo): Promise<demoUser> => {
			if (!parent.userId) {
				throw new Error("Cannot fetch user: userId is missing in comments.");
			}

			return query(`SELECT ${getSelect(info, "User")} FROM "demoUser" WHERE "id" = ${parent.userId}`).then(r => r.rows.shift());
		},
	}
};

// Initialize Apollo Server
const apolloServer: ApolloServer<BaseContext> = new ApolloServer({
	typeDefs,
	resolvers,
	validationRules: [depthLimit(3)],
});

// Start Apollo Server
const apolloServerHandler = startServerAndCreateNextHandler(apolloServer);

export async function GET(req: NextRequest) {
	return apolloServerHandler(req);
}

export async function POST(req: NextRequest) {
	return apolloServerHandler(req);
}
