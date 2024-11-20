import { ApolloServer, BaseContext } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { typeDefs } from "./typeDefs";
import { Query } from "./resolvers/Query";
import { CommentResolvers } from "./resolvers/Comment";
import { PostResolvers } from "./resolvers/Post";
import { UserResolvers } from "./resolvers/User";
import { document, variables } from "./helpers/document";
import depthLimit from "graphql-depth-limit";

// Initialize Apollo Server
const apolloServer: ApolloServer<BaseContext> = new ApolloServer({
	typeDefs,
	resolvers: {
		Query,
		...CommentResolvers,
		...PostResolvers,
		...UserResolvers,
	},
	validationRules: [depthLimit(3)],
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
