import { ApolloServer, BaseContext } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { typeDefs } from "./typeDefs";
import { Query } from "@/app/api/v1/placeholder/(apollo)/apollo/_resolvers/Query";
import { CommentResolvers } from "@/app/api/v1/placeholder/(apollo)/apollo/_resolvers/Comment";
import { PostResolvers } from "@/app/api/v1/placeholder/(apollo)/apollo/_resolvers/Post";
import { UserResolvers } from "@/app/api/v1/placeholder/(apollo)/apollo/_resolvers/User";
import { document, variables } from "@/app/api/v1/placeholder/(apollo)/apollo/_helpers/document";
import depthLimit from "graphql-depth-limit";

// Initialize Apollo Server
const apolloServer: ApolloServer<BaseContext> = new ApolloServer({
	typeDefs,
	resolvers: {
		Query,
		Comment: CommentResolvers.Comment,
		Post: PostResolvers.Post,
		User: UserResolvers.User,
		Mutation: {
			...CommentResolvers.Mutation,
			...PostResolvers.Mutation,
			...UserResolvers.Mutation,
		},
	},
	validationRules: [depthLimit(3)],
	introspection: true,
	plugins: [
		ApolloServerPluginLandingPageLocalDefault({
			embed: {
				initialState: {
					pollForSchemaUpdates: false,
				},
			},
			document,
			variables,
		}),
	],
});

// Start Apollo Server
export const apolloServerHandler = startServerAndCreateNextHandler(apolloServer);
