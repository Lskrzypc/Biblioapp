import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthorService } from './author.service'; // Assurez-vous d'importer correctement votre service
import { PlainAuthorPresenter } from './author.presenter'; // Assurez-vous d'importer correctement votre présentateur
import { AuthorDto } from 'library-api/src/dto/author.dto';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  // Récupérer la liste d'auteurs (GET)
  @Get()
  async getAllAuthors() {
    const authors = await this.authorService.getAllAuthors();
    return authors;
  }

  // Ajouter un nouvel auteur (POST)
  @Post()
  async createAuthor(@Body() authorData: AuthorDto) {
    const createdAuthor = await this.authorService.createAuthor(authorData);
    return createdAuthor;
  }
}
