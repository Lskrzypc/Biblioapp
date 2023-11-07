import { faker } from "@faker-js/faker";
import {Book, BookId} from "../entities";

export const bookFixture = () : Book =>
    ({
        id: faker.string.uuid() as BookId,
        name: faker.string.sample(12),
        writtenOn: faker.date.anytime(),
    }) as Book;
