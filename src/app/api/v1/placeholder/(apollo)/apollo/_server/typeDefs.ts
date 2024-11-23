export const typeDefs: string = `#graphql
  type Comment {
    id: ID!
    message: String!
    rating: String!
    createdAt: String!
    updatedAt: String!
    user: User!
    userId: ID!
    post: Post!
    postId: ID!
  }

  input CreateComment {
    rating: Int!
    message: String!
    postId: ID!
    userId: ID!
  }

  input UpdateComment {
    rating: Int
    message: String
  }

	# ---

  type Post {
    id: ID!
    title: String!
    description: String!
    cover: String
    tags: [String!]!
    createdAt: String!
    updatedAt: String!
    user: User!
    userId: ID!
    comments: [Comment!]!
  }

  input CreatePost {
    title: String!
    description: String!
    cover: String
    tags: [String!]!
    userId: ID!
  }

  input UpdatePost {
    title: String
    description: String
    cover: String
    tags: [String!]
  }

	# ---

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

  input CreateUser {
    avatar: String
    name: String!
    bio: String!
    email: String!
  }

  input UpdateUser {
    avatar: String
    name: String
    bio: String
    email: String
  }

	# ---

  type Query {
    comment(id: ID!): Comment
    comments(limit: Int!, offset: Int!, like: String): [Comment!]!

    post(id: ID!): Post
    posts(limit: Int!, offset: Int!, like: String): [Post!]!

    user(id: ID!): User
    users(limit: Int!, offset: Int!, like: String): [User!]!
  }
  
  type Mutation {
    createComment(input: CreateComment!): Comment!
    updateComment(id: ID!, input: UpdateComment!): Comment
    deleteComment(id: ID!): Comment

    createPost(input: CreatePost!): Post!
    updatePost(id: ID!, input: UpdatePost!): Post
    deletePost(id: ID!): Post

    createUser(input: CreateUser!): User!
    updateUser(id: ID!, input: UpdateUser!): User
    deleteUser(id: ID!): User
  }
`;
