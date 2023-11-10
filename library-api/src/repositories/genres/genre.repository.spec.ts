import { DataSource } from 'typeorm';
import { adaptGenreEntityToPlainGenreModel } from './genre.utils';
import { genreFixture } from './../../fixtures/genre.fixture';
import { GenreRepository } from './genre.repository';

describe('GenreRepository', () => {
  describe('getAllGenre', () => {
    it('should return all genres', async () => {
      const dataSource = {
        createEntityManager: jest.fn(),
      } as unknown as DataSource;
      const repository = new GenreRepository(dataSource);

      const genres = genreFixture();

      const findSpy = jest.spyOn(repository, 'find').mockResolvedValue(genres);

      const result = await repository.getAllGenre();

      expect(findSpy).toHaveBeenCalledTimes(1);
      expect(findSpy).toHaveBeenCalledWith({ relations: { bookGenres: true } });

      expect(result).toEqual(adaptGenreEntityToPlainGenreModel(genres));
    });
  });
});
