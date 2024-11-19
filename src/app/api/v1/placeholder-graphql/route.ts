import type { demoUser, demoPost, demoComment } from "@prisma/client";
import { ApolloServer, BaseContext } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { FieldsByTypeName, parseResolveInfo, ResolveTree } from "graphql-parse-resolve-info";
import { query } from "@/lib/database";
import { GraphQLResolveInfo } from "graphql/type";
import { NextRequest } from "next/server";

// GraphQL type definitions
const typeDefs: string = `#graphql
  type Post {
    id: ID!
    title: String!
    description: String!
    cover: String!
    tags: String!
    createdAt: String!
    updatedAt: String!
    user: User!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    message: String!
    rating: String!
    createdAt: String!
    updatedAt: String!
    user: User!
    post: Post!
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
    users: [User!]!
    posts: [Post!]!
    comments: [Comment!]!
  }
`;

const resolvers = {
	Query: {
		users: async (_: unknown, __: unknown, ___: unknown, info: GraphQLResolveInfo): Promise<demoUser[]> => {
			const resolveInfo: ResolveTree | FieldsByTypeName | null | undefined = parseResolveInfo(info);
			const fields: ResolveTree | { [k: string]: ResolveTree } = resolveInfo?.fieldsByTypeName?.User || {};
			const req = `SELECT ${Object.keys(fields).join(", ") || "*"} FROM "demoUser"`;

			return (await query(req)).rows;
		},
		posts: async (_: unknown, __: unknown, ___: unknown, info: GraphQLResolveInfo): Promise<demoPost[]> => {
			const resolveInfo: ResolveTree | FieldsByTypeName | null | undefined = parseResolveInfo(info);
			const fields: ResolveTree | { [k: string]: ResolveTree } = resolveInfo?.fieldsByTypeName?.Post || {};
			const req = `SELECT ${Object.keys(fields).join(", ") || "*"} FROM "demoPost"`;

			return (await query(req)).rows;
		},
		comments: async (_: unknown, __: unknown, ___: unknown, info: GraphQLResolveInfo): Promise<demoComment[]> => {
			const resolveInfo: ResolveTree | FieldsByTypeName | null | undefined = parseResolveInfo(info);
			const fields: ResolveTree | { [k: string]: ResolveTree } = resolveInfo?.fieldsByTypeName?.Comment || {};
			const req = `SELECT ${Object.keys(fields).join(", ") || "*"} FROM "demoComment"`;

			return (await query(req)).rows;
		},
	},
};

// Initialize Apollo Server
const apolloServer: ApolloServer<BaseContext> = new ApolloServer({
	typeDefs,
	resolvers,
});

// Start Apollo Server
const apolloServerHandler = startServerAndCreateNextHandler(apolloServer);

export async function GET(req: NextRequest) {
	return apolloServerHandler(req);
}

export async function POST(req: NextRequest) {
	return apolloServerHandler(req);
}
