export const typeDefs: string = `#graphql
  type Post {
    id: ID!
    title: String!
    description: String!
    cover: String
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
    avatar: String
    name: String!
    bio: String!
    email: String!
    createdAt: String!
    updatedAt: String!
    posts: [Post!]!
    comments: [Comment!]!
  }

  input CreatePostInput {
    title: String!
    description: String!
    cover: String
    tags: [String!]!
  }

  input UpdatePostInput {
    title: String
    description: String
    cover: String
    tags: [String!]
  }

  input CreateUserInput {
    avatar: String
    name: String!
    bio: String!
    email: String!
  }

  input UpdateUserInput {
    avatar: String
    name: String
    bio: String
    email: String
  }

  type Query {
    user(id: ID!): User
    users(limit: Int!, offset: Int!, like: String): [User!]!

    post(id: ID!): Post
    posts(limit: Int!, offset: Int!, like: String): [Post!]!

    comment(id: ID!): Comment
    comments(limit: Int!, offset: Int!, like: String): [Comment!]!
  }
  
  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: UpdateUserInput!): User!
    deleteUser(id: ID!): User

    createPost(input: CreatePostInput!): Post!
    updatePost(id: ID!, input: UpdatePostInput!): Post!
    deletePost(id: ID!): User
  }
`;
