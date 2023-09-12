import { Controller, Get } from '@nestjs/common';

@Controller('cats/breeds')
export class CatBreedsController {
  @Get()
  findAll(): string {
    return 'This action returns all cat breeds';
  }
}

@Controller('dogs/breeds')
export class DogBreedsController {
  @Get()
  findAll(): string {
    return 'This action returns all dog breeds';
  }
}
