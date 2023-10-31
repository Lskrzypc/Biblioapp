import { Module } from '@nestjs/common';
import { AuthorController } from 'library-api/src/controllers/authors/author.controller';
import { BookController } from 'library-api/src/controllers/books/book.controller';
import { GenreController } from 'library-api/src/controllers/genres/genre.controller';
import { RepositoryModule } from 'library-api/src/repositories/repository.module';
import { UseCasesModule } from 'library-api/src/useCases/useCases.module';
import { AuthorService } from 'library-api/src/controllers/authors/author.service';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';

@Module({
  imports: [UseCasesModule, RepositoryModule],
  controllers: [AuthorController, BookController, GenreController,UserController],
  providers: [AuthorService,UserService]
})
export class ControllerModule {}
