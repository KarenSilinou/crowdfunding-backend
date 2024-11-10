import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateFundDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @Min(0, { message: 'Amount must be a positive number' })
  amount: number;

  @IsNumber()
  @Min(0, { message: 'Raise must be a positive number' })
  raise: number;

  @IsNumber()
  @Min(0)
  goal: number;
}
