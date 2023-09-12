import {
  Controller,
  Get,
  HttpCode,
  Post,
  Header,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './cats.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get('breeds')
  findBreeds(): string {
    return 'This action returns all cat breeds';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns cat with ID ${id}`;
  }

  @Put(':id')
  update(@Body() updateCatDto: UpdateCatDto) {
    return 'This action updates a cat';
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This action removes cat with ID ${id}`;
  }
}
