import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserParamDto {
  @IsNumber()
  id: number;
}

export class UpdateUserBodyDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  age: number;
}
