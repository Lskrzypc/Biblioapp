import { DataSource } from 'typeorm';
import { genreFixture } from '../../fixtures';
import { GenreRepository } from './genre.repository';

describe('GenreRepository', () => {
  describe('getAllGenre', () => {
    it('should return all genres', async () => {
      const dataSource = {
        createEntityManager: jest.fn(),
      } as unknown as DataSource;
      const repository = new GenreRepository(dataSource);

      const genres = [genreFixture(), genreFixture(), genreFixture()];
      const findSpy = jest.spyOn(repository, 'find').mockResolvedValue(genres);

      const result = await repository.getAllGenre();

      expect(findSpy).toHaveBeenCalledTimes(1);
      expect(findSpy).toHaveBeenCalledWith({ relations: { bookGenres: true } });

      expect(result).toEqual((genres));
    });
    it("should return an empty array, if no genres are stored", async () => {
        const dataSource = {
            createEntityManager: jest.fn(),
        } as unknown as DataSource;
        const repository = new GenreRepository(dataSource);

        const genres = [];

        const findSpy = jest.spyOn(repository, 'find').mockResolvedValue(genres);

        const result = await repository.getAllGenre();

        expect(findSpy).toHaveBeenCalledTimes(1);
        expect(findSpy).toHaveBeenCalledWith({
            relations: {
                bookGenres: true,
            },
        });

        expect(result).toStrictEqual(genres);
    })
  });

  describe('getGenreById', () => {
    it ("should return a genre by its ID", async () => {
        const dataSource = {
            createEntityManager: jest.fn(),
        } as unknown as DataSource;
        const repository = new GenreRepository(dataSource);

        const genre = genreFixture();
        const findOneSpy = jest.spyOn(repository, 'findOne').mockResolvedValue(genre);

        const result = await repository.getGenreById(genre.id);

        expect(findOneSpy).toHaveBeenCalledTimes(1);
        expect(findOneSpy).toHaveBeenCalledWith({ where: { id: genre.id } });

        expect(result).toEqual(genre);
    })
  })

  describe ('deleteGenre', () => {
    it ("should delete a genre by its ID", async () => {
        const dataSource = {
            createEntityManager: jest.fn(),
        } as unknown as DataSource;
        const repository = new GenreRepository(dataSource);

        const genre = genreFixture();
        const findOneSpy = jest.spyOn(repository, 'findOne').mockResolvedValue(genre);

        const result = await repository.getGenreById(genre.id);

        expect(findOneSpy).toHaveBeenCalledTimes(1);
        expect(findOneSpy).toHaveBeenCalledWith({ where: { id: genre.id } });

        expect(result).toEqual(genre);
    })
  })
});
