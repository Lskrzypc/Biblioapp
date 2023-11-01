/* eslint-disable import/no-cycle */
import { BaseEntity, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Genre } from './Genre';
import { Book } from './Book';

export type BookGenreId = string & { __brand: 'BookGenre' };

// BookGenre représente la relation entre un livre et un genre. C'est une table intermédiaire (de jointure), qui lie les books et les (leurs) genres.
@Entity('BookGenres')
export class BookGenre extends BaseEntity {
  @PrimaryColumn()
  id: BookGenreId;

  @ManyToOne(() => Book, (book) => book.bookGenres, {
    onDelete: 'CASCADE',
  })
  book: Book;

  // Un livre peut être associé à plusieurs genres
  @ManyToOne(() => Genre, (genre) => genre.bookGenres, {
    onDelete: 'CASCADE',
  })
  genre: Genre;
}
