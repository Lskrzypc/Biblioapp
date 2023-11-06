import { AuthorModel } from "./author.model";

export type PlainBookModel = {
  id: string;
  name: string;
};

export type CreateBookModel = {
  name: string;
  writtenOn: Date;
  author: AuthorModel;
  genres: string[];
};

export type UpdateBookModel = {
  name?: string;
  writtenOn?: Date;
  author?: AuthorModel;
  genres?: string[];
};



