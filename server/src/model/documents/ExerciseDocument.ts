import { Document } from 'mongoose';
import { Exercise } from 'shared/dist/model/Sheet';
import { prop, Typegoose } from 'typegoose';

export class ExerciseSchema extends Typegoose implements Exercise {
  @prop({ required: true })
  exNo!: number;

  @prop({ required: true })
  bonus!: boolean;

  @prop({ required: true })
  maxPoints!: number;
}

export interface ExerciseDocument extends ExerciseSchema, Document {}
