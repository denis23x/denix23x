export type User = {
	id: number;
	avatar: string;
	firstName: string;
	lastName: string;
	gender: string;
	sex: string;
	bio: string;
	email: string;
	createdAt: string;
	updatedAt: string;
};

export type Book = {
	id: number;
	userId: number;
	title: string;
	cover: string;
	author: string;
	format: string;
	genre: string;
	publisher: string;
	series: string;
	createdAt: string;
	updatedAt: string;
};
