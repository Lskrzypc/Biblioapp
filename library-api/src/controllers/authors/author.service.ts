import { Injectable } from '@nestjs/common';
import { AuthorRepository } from '../../repositories/authors/author.repository'; 
import { AuthorDto } from '../../dto/author.dto';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  // Récupérer la liste d'auteurs
  async getAllAuthors() {
    return this.authorRepository.find();
  }

  // Ajouter un nouvel auteur
  async createAuthor(authorData: AuthorDto) {
    const newAuthor = this.authorRepository.create(authorData);
    return this.authorRepository.save(newAuthor);
  }
}
