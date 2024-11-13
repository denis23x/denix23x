import usersSeed from "./users/seed";
import booksSeed from "./books/seed";
import reviewsSeed from "./reviews/seed";
import type { Book } from "./books/schema";
import type { User } from "./users/schema";
import type { Review } from "./reviews/schema";

export const users: Record<string, User> = usersSeed();
export const books: Record<string, Book> = booksSeed(users);
export const reviews: Record<string, Review> = reviewsSeed(users, books);
