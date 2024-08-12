import { IsNumber, IsString } from 'class-validator';

export class SaveUserDto {
  @IsString()
  email: string;

  @IsNumber()
  age: number;

  @IsString()
  password: string;
}
