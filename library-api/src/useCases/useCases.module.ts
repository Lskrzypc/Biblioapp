import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/repositories/repository.module';
import { AuthorUseCases } from 'src/useCases/authors/author.useCases';
import { BookUseCases } from 'src/useCases/books/book.useCases';
import { GenreUseCases } from 'src/useCases/genres/genre.useCases';

const useCases = [AuthorUseCases, BookUseCases, GenreUseCases];

@Module({
  imports: [RepositoryModule],
  providers: [...useCases],
  exports: [...useCases],
})
export class UseCasesModule {}
