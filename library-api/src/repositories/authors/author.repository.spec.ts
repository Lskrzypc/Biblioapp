import {AuthorRepository} from "./author.repository";
import {authorFixture} from "../../fixtures";
import {adaptAuthorEntityToPlainAuthorModel} from "./author.utils";
import { DataSource } from 'typeorm';


describe('AuthorRepository',()=>{
    describe('getAllAuthors', ()=> {
        it('should return all authors', async()=>{
            const dataSource = {
                createEntityManager: jest.fn(),
            } as unknown as DataSource;
            const repository = new AuthorRepository(dataSource);

            const authors = [authorFixture(), authorFixture(), authorFixture()];

            const findSpy = jest
                .spyOn(repository, 'find')
                .mockResolvedValue(authors);

            const result = await repository.getAllAuthors();

            expect(findSpy).toHaveBeenCalledTimes(1);
            expect(findSpy).toHaveBeenCalledWith({
                relations: { books: true },
            });

            expect(result).toEqual(
                authors.map(adaptAuthorEntityToPlainAuthorModel),
            );

            expect(true).toBeTruthy();
            expect(null).toBeNull();
        })
    })

})
