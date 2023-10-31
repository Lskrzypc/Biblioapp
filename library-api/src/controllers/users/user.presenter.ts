import { UserModel } from 'library-api/src/models'; // Assurez-vous que le chemin d'importation est correct

export class UserPresenter {
  id: string;
  firstName: string;
  lastName: string;

  private constructor(data: UserPresenter) {
    Object.assign(this, data);
  }

  public static from(data: UserModel): UserPresenter {
    return new UserPresenter({
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
    });
  }
}
