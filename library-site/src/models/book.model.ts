import { AuthorModel } from './author.model';

export type PlainBookModel = {
  id: string;
  name: string;
  author: AuthorModel;
  genres: string[];
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
