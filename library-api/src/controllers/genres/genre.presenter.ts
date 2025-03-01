import { GenreId } from 'src/entities';
import { GenreModel } from 'src/models';

export class PlainGenrePresenter {
  id: GenreId;

  name: string;

  private constructor(data: PlainGenrePresenter) {
    Object.assign(this, data);
  }

  public static from(data: GenreModel): PlainGenrePresenter {
    return new PlainGenrePresenter({
      id: data.id,
      name: data.name,
    });
  }
}

export class GenrePresenter {
  name: string;

  private constructor(data: GenrePresenter) {
    Object.assign(this, data);
  }

  public static from(data: GenreModel): GenrePresenter {
    return new GenrePresenter({
      name: data.name,
    });
  }
}
