import { PlainAuthorModel, UpdateAuthorModel } from 'src/models';

export type PlainAuthorRepositoryOutput = PlainAuthorModel;
export type CreateAuthorRepositoryInput = Omit<PlainAuthorModel, 'id'>;
export type UpdateAuthorRepositoryInput = UpdateAuthorModel;
