import { Author } from 'src/entities';
import { PlainAuthorRepositoryOutput } from './author.repository.type';

export const adaptAuthorEntityToPlainAuthorModel = (
  author: Author,
): PlainAuthorRepositoryOutput => ({
  ...author,
});
