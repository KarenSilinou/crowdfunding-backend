import { Schema, model, Document } from 'mongoose';

export interface Fund extends Document {
  title: string;
  description: string;
  goal: number;
  raise: number;
}

const FundSchema = new Schema<Fund>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  goal: { type: Number, required: true },
  raise: { type: Number, required: true },
});

export const FundModel = model<Fund>('Fund', FundSchema);
