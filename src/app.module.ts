import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FundModule } from './fund/fund.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/funds'),
    FundModule,
  ],
})
export class AppModule {}
