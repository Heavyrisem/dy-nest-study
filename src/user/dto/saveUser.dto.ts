import { IsNumber, IsString } from 'class-validator';

export class SaveUserDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;
}
