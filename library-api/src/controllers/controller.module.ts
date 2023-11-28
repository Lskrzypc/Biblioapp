import { Module } from '@nestjs/common';
import { AuthorController } from 'src/controllers/authors/author.controller';
import { BookController } from 'src/controllers/books/book.controller';
import { GenreController } from 'src/controllers/genres/genre.controller';
import { RepositoryModule } from 'src/repositories/repository.module';
import { UseCasesModule } from 'src/useCases/useCases.module';

@Module({
  imports: [UseCasesModule, RepositoryModule],
  controllers: [AuthorController, BookController, GenreController],
})
export class ControllerModule {}
