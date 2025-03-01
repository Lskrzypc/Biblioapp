import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { AuthorId } from 'src/entities';
import { AuthorUseCases } from 'src/useCases';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';
import { AuthorPresenter, PlainAuthorPresenter } from './author.presenter';

@ApiTags('authors')
@Controller('authors')
export class AuthorController {
  constructor(private readonly authorUseCases: AuthorUseCases) {}

  @Get('/')
  @ApiOperation({
    description: 'Get all authors that actually exist in the database',
    operationId: 'getAll',
  })
  @ApiOkResponse({
    description: 'All authors',
    type: PlainAuthorPresenter,
    isArray: true,
  })
  public async getAll(): Promise<PlainAuthorPresenter[]> {
    const authors = await this.authorUseCases.getAllPlain();

    return authors.map(PlainAuthorPresenter.from);
  }

  @Get('/:id')
  @ApiOperation({
    description: 'Get an author by its id',
    operationId: 'getById',
  })
  @ApiOkResponse({
    description: 'The author',
    type: PlainAuthorPresenter,
  })
  public async getById(
    @Param('id') id: AuthorId,
  ): Promise<PlainAuthorPresenter> {
    const author = await this.authorUseCases.getById(id);

    return PlainAuthorPresenter.from(author);
  }

  @Post('/')
  public async createAuthor(
    @Body() input: CreateAuthorDto, // Ajout de l'annotation '@Body'
  ): Promise<AuthorPresenter> {
    return this.authorUseCases.createAuthor(input);
  }

  @Patch('/:id')
  public async updateAuthor(
    @Body() input: UpdateAuthorDto,
  ): Promise<AuthorPresenter> {
    return this.authorUseCases.updateAuthor(input);
  }

  @Delete('/:id')
  public async deleteAuthor(@Param('id') id: AuthorId): Promise<void> {
    return this.authorUseCases.deleteById(id);
  }
}
