/* eslint-disable implicit-arrow-linebreak */
// Je supprime la règle eslint dans ces fichiers car lorsque
// je corrige le problème, une autre erreur eslint apparaît.
import { faker } from '@faker-js/faker';
import { Book, BookId } from '../entities';
import { authorFixture } from './author.fixture';
import { genreFixture } from './genre.fixture';

export const bookFixture = (): Book =>
  ({
    id: faker.string.uuid() as BookId,
    name: faker.string.sample(12),
    writtenOn: faker.date.past(),
    author: authorFixture(),
    bookGenres: [{ genre: genreFixture() }, { genre: genreFixture() }],
  }) as Book;
