import { Injectable } from '@nestjs/common';
import {GenreRepository} from "../../repositories";
import {GenreId} from "../../entities";

@Injectable()
export class GenreUseCases {
    constructor(private readonly GenreRepository: GenreRepository) {}

    /**
     * Get all genres
     * @returns Array of genres
     */
    public async getAllPlain() {
        return this.GenreRepository.getAllGenre();
    }

    /**
     * Get a genre by its ID
     * @param id Genre's ID of type GenreId
     * @returns Genre if found
     * @throws 404: genre with this ID was not found
     */
    public async getGenreById(id: GenreId) {
        return this.GenreRepository.getGenreById(id);
    }

    /**
     * Create a new genre
     * @param input
     * @returns The created genre
     */
    public async createGenre(input) {
        return this.GenreRepository.createGenre(input);
    }

    /**
     * Delete a genre by its ID
     * @param id Genre's ID of type GenreId
     * @returns void
     * @throws 404: genre with this ID was not found
     */
    public async deleteGenre(id: GenreId) {
        return this.GenreRepository.deleteGenre(id);
    }
}