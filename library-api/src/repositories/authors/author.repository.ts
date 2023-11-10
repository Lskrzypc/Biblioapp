import { Injectable } from '@nestjs/common';
import { Author, AuthorId } from '../../entities'; // Assurez-vous d'importer AuthorId
import { DataSource, Repository } from 'typeorm';
import {
  CreateAuthorRepositoryInput,
  PlainAuthorRepositoryOutput,
  UpdateAuthorRepositoryInput,
} from './author.repository.type';
import { adaptAuthorEntityToPlainAuthorModel } from './author.utils'; // Assurez-vous d'importer le fichier d'adaptation
import { v4 } from 'uuid';

@Injectable()
export class AuthorRepository extends Repository<Author> {
  constructor(public readonly dataSource: DataSource) {
    super(Author, dataSource.createEntityManager());
  }

  /**
   * Get all authors
   * @returns Array of authors
   */
  public async getAllAuthors(): Promise<PlainAuthorRepositoryOutput[]> {
    const authors = await this.find({
      relations: { books: true },
    });

    return authors.map(adaptAuthorEntityToPlainAuthorModel);
  }

  /**
   * Get an author by its ID
   * @param id Author's ID of type AuthorId
   * @returns Author if found
   */
  public async getAuthorById(
    id: AuthorId,
  ): Promise<PlainAuthorRepositoryOutput> {
    const author = await this.findOne({ where: { id } });

    if (!author) throw new Error(`Author - '${id}'`);

    return adaptAuthorEntityToPlainAuthorModel(author);
  }

  /**
   * Create an author
   * @param input Data to create an author
   * @returns Author created
   * @throws Error if author already exists
   */
  public async createAuthor(
    input: PlainAuthorRepositoryOutput,
  ): Promise<CreateAuthorRepositoryInput> {
    const id = await this.dataSource.transaction(async (manager) => {
      const author = this.create({
        id: v4(),
        ...input,
      });
      await manager.save(author);
      return author.id;
    });

    return this.getAuthorById(id);
  }

  /**
   * Update an author
   * @param input Data to update an author
   * @returns Author updated
   */
  public async updateAuthor(
    input: UpdateAuthorRepositoryInput,
  ): Promise<PlainAuthorRepositoryOutput> {
    const id = await this.dataSource.transaction(async (manager) => {
      const author = await this.findOne({ where: { id: input.id } });
      if (!author) throw new Error(`Author - '${input.id}'`);

      //Update the author with the input data
      const updatedAuthor = this.create({
        ...author,
        ...input,
      });

      await manager.save(updatedAuthor);
      return updatedAuthor.id;
    });

    return this.getAuthorById(id);
  }

  /**
   * Delete an author
   * @param id Author's ID of type AuthorId
   * @returns Author deleted
   * @throws Error if author not found
   */
  public async deleteById(id: AuthorId): Promise<void> {
    //Changer la promesse si le front a besoin de changer
    const author = await this.getAuthorById(id);
    if (!author) throw new Error(`Author - '${id}'`);

    await this.delete(author);
  }
}
