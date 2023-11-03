import { Controller, Get, Param, Post, Body, Patch, Delete} from '@nestjs/common';
import { GenrePresenter, PlainGenrePresenter} from './genre.presenter';
import { GenreUseCases } from '../../useCases'
import { CreateGenreDto } from './genre.dto';
import {GenreId} from "../../entities";
@Controller('genres')
export class GenreController {

    constructor(private readonly genreUseCases: GenreUseCases) {}

    @Get('/')
    public async getAll(): Promise<PlainGenrePresenter[]> {
        const genres = await this.genreUseCases.getAllPlain();
        return genres.map(PlainGenrePresenter.from);
    }

    @Get('/:id')
    public async getGenreById(@Param('id') id: GenreId): Promise<PlainGenrePresenter> {
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