import { AuthorId } from 'src/entities';
import { PlainAuthorModel } from 'src/models';

export class PlainAuthorPresenter {
  id: AuthorId;

  firstName: string;

  lastName: string;

  photoUrl: string;

  private constructor(data: PlainAuthorPresenter) {
    Object.assign(this, data);
  }

  public static from(data: PlainAuthorModel): PlainAuthorPresenter {
    return new PlainAuthorPresenter({
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      photoUrl: data.photoUrl,
    });
  }
}

export class AuthorPresenter {
  firstName: string;

  lastName: string;

  private constructor(data: AuthorPresenter) {
    Object.assign(this, data);
  }

  public static from(data: PlainAuthorModel): AuthorPresenter {
    return new AuthorPresenter({
      firstName: data.firstName,
      lastName: data.lastName,
    });
  }
}
