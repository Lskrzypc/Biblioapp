import { DataSource } from 'typeorm';
import { AuthorRepository } from './author.repository';
import { authorFixture } from '../../fixtures';
import { adaptAuthorEntityToPlainAuthorModel } from './author.utils';

describe('AuthorRepository', () => {
  describe('getAllAuthors', () => {
    it('should return all authors', async () => {
      const dataSource = {
        createEntityManager: jest.fn(),
      } as unknown as DataSource;
      const repository = new AuthorRepository(dataSource);

      const authors = [authorFixture(), authorFixture(), authorFixture()];

      const findSpy = jest.spyOn(repository, 'find').mockResolvedValue(authors);

      const result = await repository.getAllAuthors();

      expect(findSpy).toHaveBeenCalledTimes(1);
      expect(findSpy).toHaveBeenCalledWith({
        relations: { books: true },
      });

      expect(result).toEqual(authors.map(adaptAuthorEntityToPlainAuthorModel));

      expect(true).toBeTruthy();
      expect(null).toBeNull();
    });
    it('should return an empty array, if no authors are stored', async () => {
      const dataSource = {
        createEntityManager: jest.fn(),
      } as unknown as DataSource;
      const repository = new AuthorRepository(dataSource);

      const authors = [];

      const findSpy = jest.spyOn(repository, 'find').mockResolvedValue(authors);

      const result = await repository.getAllAuthors();

      expect(findSpy).toHaveBeenCalledTimes(1);
      expect(findSpy).toHaveBeenCalledWith({
        relations: {
          books: true,
        },
      });

      expect(result).toStrictEqual(authors);
    });
  });

  describe('getAuthorById', () => {
    it('should return found an author', async () => {
      const dataSource = {
        createEntityManager: jest.fn(),
      } as unknown as DataSource;
      const repository = new AuthorRepository(dataSource);

      const author = authorFixture();

      const findOneSpy = jest
        .spyOn(repository, 'findOne')
        .mockResolvedValue(author);

      const result = await repository.getAuthorById(author.id);

      expect(findOneSpy).toHaveBeenCalledTimes(1);
      expect(findOneSpy).toHaveBeenCalledWith({ where: { id: author.id } });

      expect(result).toEqual(adaptAuthorEntityToPlainAuthorModel(author));
    });
  });

  describe('deleteById', () => {
    it('should delete an author', async () => {
      const dataSource = {
        createEntityManager: jest.fn(),
      } as unknown as DataSource;
      const repository = new AuthorRepository(dataSource);

      const author = authorFixture();
      jest.spyOn(repository, 'getAuthorById').mockResolvedValue(author);
      jest.spyOn(repository, 'delete').mockResolvedValue(undefined);

      await expect(repository.deleteById(author.id)).resolves.toBeUndefined();

      expect(repository.getAuthorById).toHaveBeenCalledTimes(1);
      expect(repository.getAuthorById).toHaveBeenCalledWith(author.id);

      expect(repository.delete).toHaveBeenCalledTimes(1);
      expect(repository.delete).toHaveBeenCalledWith(author);
    });
  });
});
