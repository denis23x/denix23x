const documentDefault: string = `
# --- Comments related queries and mutations (CRUD)

query getAllComments($limit: Int!, $offset: Int!) {
  comments(limit: $limit, offset: $offset) {
    id,
    rating,
    message
  }
}

query getCommentById($commentId: ID!) {
  comment(id: $commentId) {
    id,
    rating,
    message
  }
}

mutation createComment($createComment: CreateComment!) {
  createComment(input: $createComment) {
    rating,
    message
  }
}

mutation updateComment($commentId: ID!, $updateComment: UpdateComment!) {
  updateComment(id: $commentId, input: $updateComment) {
    rating,
    message
  }
}

mutation deleteComment($commentId: ID!) {
  deleteComment(id: $commentId) {
    rating,
    message
  }
}

# --- Posts related queries and mutations (CRUD)

query getAllPosts($limit: Int!, $offset: Int!, $like: String) {
  posts(limit: $limit, offset: $offset, like: $like) {
    id,
    title,
    description,
  }
}

query getPostById($postId: ID!) {
  post(id: $postId) {
    id,
    title,
    description,
  }
}

mutation createPost($createPost: CreatePost!) {
  createPost(input: $createPost) {
    cover,
    title,
    description,
    tags
  }
}

mutation updatePost($postId: ID!, $updatePost: UpdatePost!) {
  updatePost(id: $postId, input: $updatePost) {
    cover,
    title,
    description,
    tags
  }
}

mutation deletePost($postId: ID!) {
  deletePost(id: $postId) {
    cover,
    title,
    description,
    tags
  }
}

# --- Users related queries and mutations (CRUD)

query getAllUsers($limit: Int!, $offset: Int!, $like: String) {
  users(limit: $limit, offset: $offset, like: $like) {
    id,
    name,
    email
  }
}

query getUserById($userId: ID!) {
  user(id: $userId) {
    id,
    name,
    email
  }
}

mutation createUser($createUser: CreateUser!) {
  createUser(input: $createUser) {
		avatar,
		name,
		bio,
		email
  }
}

mutation updateUser($userId: ID!, $updateUser: UpdateUser!) {
  updateUser(id: $userId, input: $updateUser) {
		avatar,
		name,
		bio,
		email
  }
}

mutation deleteUser($userId: ID!) {
  deleteUser(id: $userId) {
		avatar,
		name,
		bio,
		email
  }
}
`;

export const variables = {
	commentId: "1",
	postId: "1",
	userId: "1",
	limit: 10,
	offset: 0,
	like: "",
	// Comment related variables
	createComment: {
		rating: 5,
		message: "Conduco terra cursim autem caritas vigor ab minima.",
		userId: "1",
		postId: "1",
	},
	updateComment: {
		rating: 3,
	},
	// Posts related variables
	createPost: {
		cover: null,
		title: "Via usus error tepidus advenio excepturi apto.",
		description:
			"Ter ater porro ascit urbanus abstergo clam tabgo accusantium trucido. Auctus aureus consequuntur vitium aegrus aspicio ceno patrocinor. Angelus demergo sunt eveniet auctor certus conor valens.",
		tags: ["quibusdam", "deinde", "cattus"],
		userId: "1",
	},
	updatePost: {
		cover: "https://picsum.photos/seed/NWbJM2B/512/512",
	},
	// Users related variables
	createUser: {
		avatar: null,
		name: "Victoria.Grady",
		bio: "oatmeal advocate, veteran 🐠",
		email: "Victoria.Grady@yahoo.com",
	},
	updateUser: {
		avatar: "https://picsum.photos/seed/NWbJM2B/512/512",
	},
};

export const document = documentDefault.replace(/^\n|\n$/g, "");
