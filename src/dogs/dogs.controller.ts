import { Controller, Get, Param } from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  @Get()
  findAll(): string {
    return 'This action returns all dogs';
  }

  @Get('breeds')
  findBreeds(): string {
    return 'This action returns all dog breeds';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns dog with id ${id}`;
  }
}
