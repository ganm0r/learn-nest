import { Test, TestingModule } from '@nestjs/testing';
import { CatBreedsController, DogBreedsController } from './breeds.controller';

describe('CatBreedsController', () => {
  let catController: CatBreedsController;
  let dogController: DogBreedsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatBreedsController, DogBreedsController],
    }).compile();

    catController = module.get<CatBreedsController>(CatBreedsController);
    dogController = module.get<DogBreedsController>(DogBreedsController);
  });

  it('should be defined', () => {
    expect(catController).toBeDefined();
    expect(dogController).toBeDefined();
  });
});
