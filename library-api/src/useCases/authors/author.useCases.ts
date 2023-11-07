import { Injectable } from '@nestjs/common';
import { AuthorId } from './../../entities';
import { AuthorRepository } from '../../repositories';

@Injectable()
export class AuthorUseCases {
    constructor(private readonly authorRepository: AuthorRepository) {}

    /**
     * Get all plain authors
     * @returns Array of plain authors
     */
    public async getAllPlain() {
        return this.authorRepository.getAllAuthors();
    }

    /**
     * Get an author by its ID
     * @param id Author's ID
     * @returns Author if found
     * @throws 404: author with this ID was not found
     */
    public async getById(id: AuthorId) {
        return this.authorRepository.getAuthorById(id);
    }

    /**
     * Create an author
     * @param input data to create an author
     * @returns Author created
     */
    public async createAuthor(input) {
        return this.authorRepository.createAuthor(input);
    }

    /**
     * Update an author
     * @param input data to update an author
     * @returns Author updated
     */
    public async updateAuthor(input) {
        return this.authorRepository.updateAuthor(input);
    }

    /**
     * Delete an author
     * @param id Author's ID
     * @returns Author deleted
     */
    public async deleteById(id: AuthorId) {
        return this.authorRepository.deleteById(id);
    }

}
