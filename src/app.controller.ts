import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AddDto } from './dto/add.dto';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/add')
  add(@Query() addDto: AddDto) {
    return this.appService.add(addDto);
  }

  // @Get('/add')
  // add(
  //   @Query('a', ParseIntPipe) a: number,
  //   @Query('b', ParseIntPipe) b: number,
  // ): number {
  //   return this.appService.add(a, b);
  // }

  // @Get('/add/:a/:b')
  // add2(
  //   @Param('a', ParseIntPipe) a: number,
  //   @Param('b', ParseIntPipe) b: number,
  // ): number {
  //   return this.appService.add(a, b);
  // }
}
