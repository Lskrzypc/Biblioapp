/* eslint-disable implicit-arrow-linebreak */
// Je supprime la règle eslint dans ces fichiers car lorsque
// je corrige le problème, une autre erreur eslint apparaît.
import { faker } from '@faker-js/faker';
import { Genre, GenreId } from '../entities';

export const genreFixture = (): Genre =>
  ({
    id: faker.string.uuid() as GenreId,
    name: faker.string.sample(12),
  }) as Genre;
