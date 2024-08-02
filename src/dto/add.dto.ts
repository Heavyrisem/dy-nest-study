import { IsNumber } from 'class-validator';

export class AddDto {
  @IsNumber()
  a: number;

  @IsNumber()
  b: number;
}
