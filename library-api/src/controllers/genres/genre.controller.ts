import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GenrePresenter, PlainGenrePresenter } from './genre.presenter';
import { GenreUseCases } from '../../useCases';
import { CreateGenreDto } from './genre.dto';
import { GenreId } from '../../entities';

@ApiTags('genres')
@Controller('genres')
export class GenreController {
  constructor(private readonly genreUseCases: GenreUseCases) {}

  @Get('/')
  @ApiOperation({
    description: 'Get all genres that actually exist in the database',
    operationId: 'getAll',
  })
  @ApiOkResponse({
    description: 'All genres',
    type: PlainGenrePresenter,
    isArray: true,
  })
  public async getAll(): Promise<PlainGenrePresenter[]> {
    const genres = await this.genreUseCases.getAllPlain();
    return genres.map(PlainGenrePresenter.from);
  }

  @Get('/:id')
  @ApiOperation({
    description: 'Get a genre by its id',
    operationId: 'getById',
  })
  @ApiOkResponse({
    description: 'The genre',
    type: PlainGenrePresenter,
  })
  public async getGenreById(
    @Param('id') id: GenreId,
  ): Promise<PlainGenrePresenter> {
    const genre = await this.genreUseCases.getGenreById(id);
    return PlainGenrePresenter.from(genre);
  }

  @Post('/')
  public async createGenre(
    @Body() input: CreateGenreDto,
  ): Promise<GenrePresenter> {
    return this.genreUseCases.createGenre(input);
  }

  @Delete('/:id')
  public async deleteGenre(@Param('id') id: GenreId): Promise<void> {
    return this.genreUseCases.deleteGenre(id);
  }
}
