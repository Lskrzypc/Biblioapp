import { Controller, Get, Param, Post, Body, Patch, Delete} from '@nestjs/common';
import { AuthorPresenter, PlainAuthorPresenter } from './author.presenter';
import { AuthorId } from 'library-api/src/entities';
import { AuthorUseCases, BookUseCases } from 'library-api/src/useCases';
import { CreateAuthorDto, UpdateAuthorDto} from './author.dto';

@Controller('authors')
export class AuthorController {
    constructor(private readonly authorUseCases: AuthorUseCases) {}

    @Get('/')
    public async getAll(): Promise<PlainAuthorPresenter[]> {
        const authors = await this.authorUseCases.getAllPlain();

        return authors.map(PlainAuthorPresenter.from);
    }

    @Get('/:id')
    public async getById(@Param('id') id: AuthorId): Promise<PlainAuthorPresenter> {
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
  public async deleteAuthor(
    @Param('id') id: AuthorId,
  ): Promise<AuthorPresenter> {
    return this.authorUseCases.deleteAuthor(id);
  }
}