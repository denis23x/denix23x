import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { parseResolveInfo } from "graphql-parse-resolve-info";
import { query } from "@/lib/database";
import { GraphQLResolveInfo } from "graphql/type";

type User = {
	id: number;
	name: string;
	email: string;
};

// GraphQL type definitions
const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`;

// GraphQL resolvers
const resolvers = {
	Query: {
		users: async (_: unknown, __: unknown, ___: unknown, info: GraphQLResolveInfo): Promise<User[]> => {
			// Parse requested fields
			const resolveInfo = parseResolveInfo(info);
			const fields = resolveInfo?.fieldsByTypeName?.User || {};

			console.log(info);

			// Determine fields to select
			const selectFields = Object.keys(fields).join(", ") || "*";

			// Query the database for users
			const result = await query(`SELECT ${selectFields} FROM "demoUser"`);
			return result.rows;
		},
	},
	Mutation: {
		createUser: async (_: unknown, { name, email }: { name: string; email: string }): Promise<User> => {
			const result = await query('INSERT INTO "User" (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
			return result.rows[0];
		},
	},
};

// Initialize Apollo Server
const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
});

// Start Apollo Server
const handler = startServerAndCreateNextHandler(apolloServer);

// Wrapper for GET and POST routes to make them compatible with Next.js
export async function GET(request: Request) {
	return handler(request);
}

export async function POST(request: Request) {
	return handler(request);
}
