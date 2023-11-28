import { Author, BookId } from 'src/entities';
import { PlainAuthorModel } from 'src/models/author.model';
import { GenreModel } from 'src/models/genre.model';

export type PlainBookModel = {
  id: BookId;
  name: string;
  writtenOn: Date;
  author: PlainAuthorModel;
  genres: string[];
};

export type BookModel = {
  id: BookId;
  name: string;
  writtenOn: Date;
  author: Author;
  genres: GenreModel[];
};
