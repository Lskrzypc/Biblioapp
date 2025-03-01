import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

// eslint-disable-next-line import/no-cycle
import { Book } from './Book';

export type AuthorId = string & { __brand: 'Author' };

@Entity('Authors')
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: AuthorId;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  photoUrl?: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
