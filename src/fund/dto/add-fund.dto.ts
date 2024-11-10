import { IsNumber, Min } from 'class-validator';

export class AddFundDto {
  @IsNumber()
  @Min(1, { message: 'Amount must be at least 1' })
  amount: number;
}
