import { BookModel, PlainBookModel } from 'src/models/book.model';

export type PlainBookRepositoryOutput = PlainBookModel;
export type BookRepositoryOutput = BookModel;
export type CreateBookRepositoryInput = Omit<PlainBookModel, 'id'>;
export type UpdateBookRepositoryInput = Partial<Omit<PlainBookModel, 'id'>>;
