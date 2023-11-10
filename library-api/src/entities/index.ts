import { Author } from './Author';
import { Book } from './Book';
import { BookGenre } from './BookGenre';
import { Genre } from './Genre';

export * from './Author';
export * from './Book';
export * from './BookGenre';
export * from './Genre';

export const entities = [Author, Book, BookGenre, Genre];
