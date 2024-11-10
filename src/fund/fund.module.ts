// fund.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FundController } from './fund.controller';
import { FundService } from './fund.service';
import { Fund, FundSchema } from 'src/fund.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Fund.name, schema: FundSchema }])],
  controllers: [FundController],
  providers: [FundService],
})
export class FundModule {}
