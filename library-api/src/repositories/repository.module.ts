import { Module } from '@nestjs/common';
import { AuthorRepository } from 'src/repositories/authors/author.repository';
import { BookRepository } from 'src/repositories/books/book.repository';
import { GenreRepository } from 'src/repositories/genres/genre.repository';

const repositories = [AuthorRepository, BookRepository, GenreRepository];

@Module({
  providers: [...repositories],
  exports: [...repositories],
})
export class RepositoryModule {}
