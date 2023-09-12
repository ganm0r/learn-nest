import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './dogs/dogs.controller';
import { CatsController } from './cats/cats.controller';
import {
  CatBreedsController,
  DogBreedsController,
} from './breeds/breeds.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    DogsController,
    CatsController,
    CatBreedsController,
    DogBreedsController,
  ],
  providers: [AppService],
})
export class AppModule {}
