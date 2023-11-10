import {DataSource} from "typeorm";
import {BookRepository} from "./book.repository";
import {bookFixture} from "../../fixtures";
import {adaptBookEntityToBookModel, adaptBookEntityToPlainBookModel} from "./book.utils";

describe("bookRpository", () => {
    describe("getAllPlain", () => {
        it('should return all books', async () => {
            const dataSource = {
                createEntityManager: jest.fn(),
            } as unknown as DataSource;
            const repository = new BookRepository(dataSource);

            const books = [bookFixture(), bookFixture()];

            const findSpy = jest.spyOn(repository, 'find').mockResolvedValue(books);

            const result = await repository.getAllPlain();

            expect(findSpy).toHaveBeenCalledTimes(1);
            expect(findSpy).toHaveBeenCalledWith({
                relations: {
                    bookGenres: {genre: true},
                    author: true,
                },
            });

            expect(result).toStrictEqual(books.map(adaptBookEntityToPlainBookModel));
        });
        it('should return an empty array, if no books are stored', async () => {
            const dataSource = {
                createEntityManager: jest.fn(),
            } as unknown as DataSource;
            const repository = new BookRepository(dataSource);

            const books = [];

            const findSpy = jest.spyOn(repository, 'find').mockResolvedValue(books);

            const result = await repository.getAllPlain();

            expect(findSpy).toHaveBeenCalledTimes(1);
            expect(findSpy).toHaveBeenCalledWith({
                relations: {
                    bookGenres: {genre: true},
                    author: true,
                },
            });

            expect(result).toStrictEqual(books);
        });
    });

    describe("getById", () => {
        it("should return a book by its ID", async () => {
            const dataSource = {
                createEntityManager: jest.fn(),
            } as unknown as DataSource;
            const repository = new BookRepository(dataSource);

            const book = bookFixture();

            const findOneSpy = jest.spyOn(repository, 'findOne').mockResolvedValue(book);

            const result = await repository.getById(book.id);

            expect(findOneSpy).toHaveBeenCalledTimes(1);
            expect(findOneSpy).toHaveBeenCalledWith({
                where: {id: book.id},
                relations: {
                    bookGenres: {genre: true},
                    author: true,
                }
            });
            expect(result).toStrictEqual(adaptBookEntityToBookModel(book));
        })
    })

    describe("getPlainById", () => {
        it("should return a book by its ID where plainAuthorModel", async () => {
            const dataSource = {
                createEntityManager: jest.fn(),
            } as unknown as DataSource;
            const repository = new BookRepository(dataSource);

            const book = bookFixture();

            const findOneSpy = jest.spyOn(repository, 'findOne').mockResolvedValue(book);

            const result = await repository.getPlainById(book.id);

            expect(findOneSpy).toHaveBeenCalledTimes(1);
            expect(findOneSpy).toHaveBeenCalledWith({
                where: {id: book.id},
                relations: {
                    bookGenres: {genre: true},
                    author: true,
                }
            });
            expect(result).toStrictEqual(adaptBookEntityToPlainBookModel(book));
        })
    })

    describe("deleteById", () => {
        it("should delete a book by its ID", async () => {
            const dataSource = {
                createEntityManager: jest.fn(),
            } as unknown as DataSource;
            const repository = new BookRepository(dataSource);

            const book = bookFixture();

            const findOneSpy = jest.spyOn(repository, 'findOne').mockResolvedValue(book);

            const result = await repository.getPlainById(book.id);

            expect(findOneSpy).toHaveBeenCalledTimes(1);
            expect(findOneSpy).toHaveBeenCalledWith({
                where: {id: book.id},
                relations: {
                    bookGenres: {genre: true},
                    author: true,
                }
            });
            expect(result).toStrictEqual(adaptBookEntityToPlainBookModel(book));
        })
    })
});


