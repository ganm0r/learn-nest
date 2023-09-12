import { Controller, Get, HttpCode, Post, Header, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('breeds')
  findBreeds(): string {
    return 'This action returns all cat breeds';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns cat with id ${id}`;
  }
}
