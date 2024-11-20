const documentDefault: string = `
query getAllUsers($limit: Int!, $offset: Int!, $like: String) {
  users(limit: $limit, offset: $offset, like: $like) {
    id,
    name,
    email
  }
}

query getUserById($id: ID!) {
  user(id: $id) {
    id,
    name,
    email
  }
}

mutation createUser($createUserInput: CreateUserInput!) {
  createUser(input: $createUserInput) {
		avatar,
		name,
		bio,
		email
  }
}

mutation updateUser($id: ID!, $updateUserInput: UpdateUserInput!) {
  updateUser(id: $id, input: $updateUserInput) {
		avatar,
		name,
		bio,
		email
  }
}

mutation deleteUser($id: ID!) {
  deleteUser(id: $id) {
		avatar,
		name,
		bio,
		email
  }
}
`;

export const variables = {
	id: "1",
	limit: 10,
	offset: 0,
	like: "",
	createUserInput: {
		avatar: null,
		name: "Victoria.Grady",
		bio: "oatmeal advocate, veteran 🐠",
		email: "Victoria.Grady@yahoo.com",
	},
	updateUserInput: {
		avatar: "https://picsum.photos/seed/NWbJM2B/512/512",
	},
};

export const document = documentDefault.replace(/^\n|\n$/g, "");
