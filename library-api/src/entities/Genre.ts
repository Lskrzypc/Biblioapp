/* eslint-disable import/no-cycle */
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BookGenre } from './BookGenre';

export type GenreId = string & { __brand: 'Genre' };

//Genre représente un genre de livre, en tant qu'entité entièrement indépendante. Le livre ici n'a donc pas d'importance.
@Entity('Genres')
export class Genre extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: GenreId;

  @Column()
  name: string;

  //Un genre peut être associé à plusieurs livres
  @OneToMany(() => BookGenre, (bookGenre) => bookGenre.genre)
  bookGenres: BookGenre[];
}
