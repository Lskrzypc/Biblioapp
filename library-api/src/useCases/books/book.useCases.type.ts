import { BookModel, PlainBookModel } from 'src/models';

export type PlainBookUseCasesOutput = PlainBookModel;
export type BookUseCasesOutput = BookModel;
export type CreateBookUseCasesInput = Omit<PlainBookModel, 'id'>;
export type UpdateBookUseCasesInput = Partial<Omit<PlainBookModel, 'id'>>;
