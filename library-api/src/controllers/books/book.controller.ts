import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
} from '@nestjs/common';
import {
  BookPresenter,
  PlainBookPresenter,
} from 'library-api/src/controllers/books/book.presenter';
import { BookId } from 'library-api/src/entities';
import { BookUseCases } from 'library-api/src/useCases';
import { CreateBookDto, UpdateBookDto } from './book.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('books')
@Controller('books')
export class BookController {
  constructor(private readonly bookUseCases: BookUseCases) {}

  @Get('/')
  @ApiOperation({
    description: 'Get all books that actually exist in the database',
    operationId: 'getAll',
  })
  @ApiOkResponse({
    description: 'All books',
    type: PlainBookPresenter,
    isArray: true,
  })
  public async getAll(): Promise<PlainBookPresenter[]> {
    const books = await this.bookUseCases.getAllPlain();

    return books.map(PlainBookPresenter.from);
  }

  @Get('/:id')
  @ApiOperation({
    description: 'Get a book by its id',
    operationId: 'getById',
  })
  @ApiOkResponse({
    description: 'The book',
    type: PlainBookPresenter,
  })
  public async getById(@Param('id') id: BookId): Promise<BookPresenter> {
    const book = await this.bookUseCases.getById(id);
    return BookPresenter.from(book);
  }

  @Post('/')
  public async createBook(
    @Body() input: CreateBookDto,
  ): Promise<PlainBookPresenter> {
    const book = await this.bookUseCases.createBook(input);

    return PlainBookPresenter.from(book);
  }

  @Patch('/:id')
  public async updateById(
    @Param('id') id: BookId,
    @Body() input: UpdateBookDto,
  ): Promise<PlainBookPresenter> {
    const book = await this.bookUseCases.updateById(id, input);

    return PlainBookPresenter.from(book);
  }

  @Delete('/:id')
  public async deleteById(@Param('id') id: BookId): Promise<void> {
    await this.bookUseCases.deleteById(id);
  }
}