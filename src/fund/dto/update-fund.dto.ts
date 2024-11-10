import { IsNumber, Min, IsOptional } from 'class-validator';

export class UpdateFundDto {
  @IsNumber()
  @Min(0)
  @IsOptional()
  amount?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  raised?: number;
}
