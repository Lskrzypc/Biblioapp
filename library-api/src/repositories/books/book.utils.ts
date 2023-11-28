import { Book } from 'src/entities';
import {
  BookRepositoryOutput,
  PlainBookRepositoryOutput,
} from 'src/repositories/books/book.repository.type';

export const adaptBookEntityToPlainBookModel = (
  book: Book,
): PlainBookRepositoryOutput => ({
  ...book,
  genres: book.bookGenres.map((bookGenre) => bookGenre.genre.name),
});

export const adaptBookEntityToBookModel = (
  book: Book,
): BookRepositoryOutput => ({
  ...book,
  genres: book.bookGenres.map((bookGenre) => bookGenre.genre),
});
