import { Controller, Get } from '@nestjs/common';

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
}
