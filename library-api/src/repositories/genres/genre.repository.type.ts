import { GenreModel } from '../../models';

export type GenreRepositoryOutput = GenreModel;
export type GenreRepositoryInput = Omit<GenreModel, 'id'>;
