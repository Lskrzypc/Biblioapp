import { Genre } from '../../entities';
import { GenreRepositoryOutput } from './genre.repository.type';

export const adaptGenreEntityToPlainGenreModel = (
  genre: Genre,
): GenreRepositoryOutput => ({
  ...genre,
});
