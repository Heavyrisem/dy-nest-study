import { IsNumber } from 'class-validator';

export class FindUserDto {
  @IsNumber()
  id: number;
}
