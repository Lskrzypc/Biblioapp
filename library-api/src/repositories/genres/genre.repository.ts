import { Injectable } from '@nestjs/common';
import { Genre, GenreId } from 'library-api/src/entities';
import { DataSource, Repository } from 'typeorm';
import {GenreRepositoryInput, GenreRepositoryOutput} from "./genre.repository.type";
import {adaptGenreEntityToPlainGenreModel} from "./genre.utils";
import { v4 } from 'uuid';

@Injectable()
export class GenreRepository extends Repository<Genre> {
  constructor(public readonly dataSource: DataSource) {
    super(Genre, dataSource.createEntityManager());
  }

  /**
   * Get all genres
   * @returns Array of genres
   */
  public async getAllGenre() : Promise<GenreRepositoryOutput[]> {
    const genres = await this.find({
      relations: {bookGenres: true},
    });
    return genres.map(adaptGenreEntityToPlainGenreModel);
  }

  /**
   * Get a genre by its ID
   * @param id Genre's ID of type GenreId
   * @returns Genre if found
   */
  public async getGenreById(id: GenreId): Promise<GenreRepositoryOutput> {
    const genre = await this.findOne({ where: { id } });

    if (!genre) throw new Error(`Genre - '${id}'`);

    return adaptGenreEntityToPlainGenreModel(genre);
  }


  /**
   * Create a new genre
   * @param input
   * @returns The created genre
   */

    public async createGenre(input: GenreRepositoryInput) : Promise<GenreRepositoryInput> {
    const id = await this.dataSource.transaction(async (manager) => {
      const genre = this.create({
        id: v4(),
        ...input,
      });
      await manager.save(genre);
      return genre.id;
    });
    return this.getGenreById(id);
    }

    /**
     * Delete a genre by its ID
     * @param id Genre's ID of type GenreId
     * @returns void
     */
    public async deleteGenre(id: GenreId): Promise<void> {
    const genre = await this.findOne({ where: { id } });
    if (!genre) throw new Error(`Genre - '${id}'`);
    await this.remove(genre);
    }
}