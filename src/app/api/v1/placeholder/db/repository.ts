import { users, books, reviews } from "./db";

export const getUsers = () => users;
export const getUsersByUid = (uid: string) => users[uid];

export const getBooks = () => books;
export const getBooksByUid = (uid: string) => books[uid];

export const getReviews = () => reviews;
export const getReviewsByUid = (uid: string) => reviews[uid];
