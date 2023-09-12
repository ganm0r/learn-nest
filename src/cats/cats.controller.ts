import {
  Controller,
  Get,
  HttpCode,
  Post,
  Header,
  Param,
  Body,
  // Put,
  Delete,
  HttpException,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
// import { UpdateCatDto } from './dto/update-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    try {
      return await this.catsService.findAll();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Forbidden Route',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
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
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): string {
    return `This action returns cat with ID ${id}`;
  }

  // @Put(':id')
  // update(@Body() updateCatDto: UpdateCatDto) {
  //   return 'This action updates a cat';
  // }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This action removes cat with ID ${id}`;
  }
}
