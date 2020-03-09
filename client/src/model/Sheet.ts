import { ISheet } from '../../../server/src/shared/model/Sheet';
import { HasExercises } from './Exercise';

export class Sheet extends HasExercises implements ISheet {
  readonly id!: string;
  readonly sheetNo!: number;
  readonly bonusSheet!: boolean;
}
