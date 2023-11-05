import { Author } from ".";

export type PlainBookModel = {
  id: string;
  name: string;
};

export type CreateBookModel = {
  name: string;
  writtenOn: Date;
  author: Author;
  genres: string[];
};

export type UpdateBookModel = {
  name?: string;
  writtenOn?: Date;
  author?: Author;
  genres?: string[];
};