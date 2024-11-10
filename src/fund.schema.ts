import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Fund extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true, min: 0 })
  goal: number;

  @Prop({ default: 0, min: 0 })
  raise: number;
}

export const FundSchema = SchemaFactory.createForClass(Fund);
