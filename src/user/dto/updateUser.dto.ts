import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserParamDto {
  @IsNumber()
  id: number;
}

export class UpdateUserBodyDto {
  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsNumber()
  age: number;

  @IsOptional()
  @IsString()
  password: string;
}
