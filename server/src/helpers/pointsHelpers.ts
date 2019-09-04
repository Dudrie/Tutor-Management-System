import { Types } from 'mongoose';
import { PointId } from 'shared/dist/model/Sheet';
import { ExerciseDocument } from '../model/documents/ExerciseDocument';

interface HasExerciseDocuments {
  id: string;
  exercises: ExerciseDocument[];
}

/**
 * Adjusts the points in the `pointsMap` according to the gained points.
 *
 * The points in the `pointsMap` will be updated in regards to the given `gainedPoints`. Points will be mapped using a `PointId` as key and the achieved points as value. If there were points saved for this combination of sheet / exam and exercise number the old points will be overridden.
 *
 * @param pointsMap Map containing the points.
 * @param exerciseContainer Contains the exercises for example the corresponding sheet or schein exam.
 * @param pointsGained Object containing the achieved points with the exercise numbers as keys.
 */
export function adjustPoints(
  pointsMap: Types.Map<number>,
  { id, exercises }: HasExerciseDocuments,
  pointsGained: { [exNo: string]: number }
) {
  for (const [exNo, points] of Object.entries(pointsGained)) {
    const exercise = exercises.find(ex => ex.exNo.toString() === exNo);

    if (exercise) {
      const pointId = new PointId(id, exercise.exNo);
      pointsMap.set(pointId.toString(), points);
    }
  }
}
