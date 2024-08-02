import { Injectable } from '@nestjs/common';
import { AddDto } from './dto/add.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return '덕영고등학교';
  }

  add({ a, b }: AddDto) {
    return a + b;
  }

  // add(a: number, b: number): number {
  //   return a + b;
  // }
}
