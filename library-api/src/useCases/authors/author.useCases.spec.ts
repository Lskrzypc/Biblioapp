import {AuthorRepository} from "../../repositories";
import {authorFixture} from "../../fixtures";
import {AuthorUseCases} from "./author.useCases";
import {adaptAuthorEntityToPlainAuthorModel} from "../../repositories/authors/author.utils";


describe("AuthorUseCases", () => {
    describe("getAllAuthors", () => {
        it("should call getAllAuthors from repository function", async () => {
            const repository = {
                getAllAuthors: jest.fn(),
            } as unknown as AuthorRepository;

            const useCase = new AuthorUseCases(repository);

            const authors = [authorFixture()];

            const getAllAuthorsSpy = jest
                .spyOn(repository, "getAllAuthors")
                .mockResolvedValue(authors);

            const result = await useCase.getAllPlain();

            expect(getAllAuthorsSpy).toHaveBeenCalledTimes(1);
            expect(getAllAuthorsSpy).toHaveBeenCalledWith();

            expect(result).toEqual(authors.map(adaptAuthorEntityToPlainAuthorModel));
        })
    })
    describe("getAuthorById", () => {
        it ("should call getById from repository function", async () => {
            const repository = {
                getAuthorById: jest.fn(),
            } as unknown as AuthorRepository;

            const useCase = new AuthorUseCases(repository);

            const author = authorFixture();

            const getAuthorByIdSpy = jest
                .spyOn(repository, "getAuthorById")
                .mockResolvedValue(author);

            const result = await useCase.getById(author.id);

            expect(getAuthorByIdSpy).toHaveBeenCalledTimes(1);
            expect(getAuthorByIdSpy).toHaveBeenCalledWith(author.id);

            expect(result).toEqual(adaptAuthorEntityToPlainAuthorModel(author));
        })
    })
})
