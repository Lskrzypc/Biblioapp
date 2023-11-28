import { AuthorId } from 'src/entities';

export type PlainAuthorModel = {
  id: AuthorId;
  firstName: string;
  lastName: string;
  photoUrl?: string;
};

export type UpdateAuthorModel = {
  id: AuthorId;
  firstName?: string;
  lastName?: string;
  photoUrl?: string;
};
