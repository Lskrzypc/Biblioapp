/* eslint-disable implicit-arrow-linebreak */
// Je supprime la règle eslint dans ces fichiers car lorsque
// je corrige le problème, une autre erreur eslint apparaît.
import { faker } from '@faker-js/faker';
import { Author, AuthorId } from '../entities';

export const authorFixture = (): Author =>
  ({
    id: faker.string.uuid() as AuthorId,
    firstName: faker.string.sample(8),
    lastName: faker.string.sample(8),
  }) as Author;
