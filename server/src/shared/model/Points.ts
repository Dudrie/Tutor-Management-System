import { Exercise, HasExercises } from './Sheet';

export interface Grading {
  points: number;
  comment?: string;
  additionalPoints?: number;
  subExercisePoints?: [string, number][];
}

export interface IGradingDTO {
  sheetId: string;
  comment?: string;
  additionalPoints?: number;
  points?: number;
  subExercisePoints?: [string, number][];
}

// ==================================
//               OLD
//
//  TODO: Remove this if not needed!
// ==================================

export type PointsOfSubexercises = {
  [subExId: string]: number;
};

/**
 * Entry of a `PointMap`.
 *
 * It contains a comment aswell as the gained points of an exercise. These can either be:
 * - a `number` if the exercise does NOT have subexercises
 * - OR a map which maps the subexercise Id to the gained points of this subexercise.
 */
export interface PointMapEntry {
  comment: string;
  points: number | PointsOfSubexercises;
}

export interface SheetMapEntry {
  // passedState: PassedState;
  comment: string;
  additionalPoints: number;
  exercises: {
    [exercise: string]: PointMapEntry | undefined;
  };
}

export interface UpdatePointsDTO {
  points: NewPointMapDTO;
}

export type PointMapDTO = OldPointMapDTO | NewPointMapDTO;

export type OldPointMapDTO = {
  [exercise: string]: PointMapEntry | undefined;
};

export type NewPointMapDTO = {
  [sheetId: string]: SheetMapEntry | undefined;
};

/**
 * Checks if the given DTO conforms to the NewPointMapDTO structure.
 *
 * @param dto DTO to check
 * @returns `true` if it is a NewPointMapDTO, `false` otherwise.
 */
function isNewPointMapDTO(dto: PointMapDTO): dto is NewPointMapDTO {
  const entries = Object.entries(dto);

  if (entries.length === 0) {
    // An empty object is considered a NewPointMapDTO bc it does not matter.
    return true;
  }

  const [, value] = entries[0];

  // We check for 'additionalPoints' here because 'exercises' could be left out by mongoose and 'comment' also exists on the entries of the old PointMap.
  return 'additionalPoints' in value;
}

export class PointId {
  static fromString(key: string): PointId {
    const regex = /ID::([a-f\d]{24})--Ex::([a-f\d]{24})/;
    const result = key.match(regex);

    if (!result || result.length < 3) {
      throw new Error(
        `Not a valid string representation of a PointId ("${key}"). The string must match the form "ID::{ObjectId}--Ex::{ObjectId}."`
      );
    }

    return new PointId(result[1], result[2]);
  }

  public readonly exerciseId: string;
  public readonly sheetId: string;

  constructor(sheetId: string, exercise: Exercise | string) {
    this.sheetId = sheetId.toString();

    if (typeof exercise === 'string') {
      this.exerciseId = exercise;
    } else {
      this.exerciseId = exercise.id;
    }
  }

  public toString(): string {
    return `ID::${this.sheetId}--Ex::${this.exerciseId}`;
  }
}

/**
 * Maps exercise identifier to the corresponding `PointMapEntry`.
 *
 * The string identifiers must be generated using a `PointId` object.
 *
 * The `PointMapEntry` contains a comment belonging to the exercise aswell as the points of the exercise. The later can either be:
 * - a `number` if the exercise does NOT have subexercises
 * - OR a map which maps the subexercise Id to the gained points of this subexercise.
 */
export class PointMap {
  static fromDTO(dto: PointMapDTO): PointMap {
    return new PointMap(dto);
  }

  static arePointMapEntriesEqual(first: PointMapEntry, second: PointMapEntry): boolean {
    if (first.comment !== second.comment) {
      return false;
    }

    // If one of the points is number just check the numbers.
    if (typeof first.points === 'number' || typeof second.points === 'number') {
      return first.points === second.points;
    }

    // Both points are objects so compare all of their entries.
    if (Object.entries(first.points).length !== Object.entries(second.points).length) {
      return false;
    }

    for (const [key, value] of Object.entries(first.points)) {
      if (value !== second.points[key]) {
        return false;
      }
    }

    return true;
  }

  static getPointsOfEntry(entry: PointMapEntry): number {
    if (typeof entry.points === 'number') {
      return entry.points;
    }

    return Object.values(entry.points).reduce((sum, pts) => sum + pts, 0);
  }

  private points: NewPointMapDTO = {};

  constructor(dto: PointMapDTO = {}) {
    this.setPointMap(dto);
  }

  /**
   * Sets the internal points according to the given dto.
   *
   * The information from the DTO will completely replace all previously saved information.
   *
   * If the DTO still conforms to the old representation the information will get converted to match the new one (the DTO does NOT get touched).
   *
   * @param dto DTO of the PointMap
   */
  private setPointMap(dto: PointMapDTO) {
    this.points = {};

    if (!isNewPointMapDTO(dto)) {
      Object.entries(dto).forEach(([key, entry]) => {
        if (!entry) {
          return;
        }

        const pointId = PointId.fromString(key);

        this.setPointEntry(pointId, entry);
      });
    } else {
      this.points = dto;
    }
  }

  setPointEntry(pointId: PointId, points: PointMapEntry) {
    const { sheetId, exerciseId } = pointId;
    const prevEntry: SheetMapEntry = this.points[sheetId] ?? {
      additionalPoints: 0,
      comment: '',
      exercises: {},
    };

    this.points[sheetId] = {
      ...prevEntry,
      exercises: {
        ...prevEntry.exercises,
        [exerciseId]: points,
      },
    };
  }

  /**
   * @deprecated
   */
  setPointEntryByKey(key: string, points: PointMapEntry) {
    this.setPointEntry(PointId.fromString(key), points);
  }

  /**
   * Sets the entry if the given sheet id to the given one.
   *
   * If there was a previous entry for this sheed id that entry will be overriden.
   *
   * @param sheetId Id of the sheet.
   * @param entry Entry which belongs to the sheet id.
   */
  setSheetEntry(sheetId: string, entry: SheetMapEntry) {
    this.points[sheetId] = entry;
  }

  /**
   * Returns the point entry for the given id if there is one.
   *
   * @param id Id as PointId or string in the format "ID::{ObjectId}--Ex::{ObjectId}."
   * @return PointMapEntry if there is one saved for that id, `undefined` else.
   * @throws An error is thrown if the string id does NOT match the required format.
   */
  getPointEntry(id: string | PointId): PointMapEntry | undefined {
    const { sheetId, exerciseId }: PointId = id instanceof PointId ? id : PointId.fromString(id);
    const sheetEntry = this.points[sheetId];

    if (!!sheetEntry) {
      const exercises = sheetEntry.exercises;

      return !!exercises ? exercises[exerciseId] : undefined;
    } else {
      return undefined;
    }
  }

  /**
   * Returns the entry of the given sheet id if there is one saved.
   *
   * @param sheetId Id of the sheet
   * @return SheetMapEntry if there is one saved for that id, `undefined` else.
   */
  getEntry(sheetId: string): SheetMapEntry | undefined {
    return this.points[sheetId];
  }

  /**
   * Adds all entries of the given map.
   *
   * If the key is already in use the old entry will be overriden if not a new one will be added. All keys which are NOT specified in the given map will NOT be touched.
   *
   * @param pointsGained PointMap containing the entries which should be added / overriden.
   */
  adjustPoints(pointsGained: PointMap) {
    pointsGained.getEntries().forEach(([key, entry]) => {
      this.setSheetEntry(key, entry);
    });
  }

  getPoints(pointId: PointId): number | undefined {
    const pointEntry = this.getPointEntry(pointId);

    if (!pointEntry) {
      return undefined;
    }

    return PointMap.getPointsOfEntry(pointEntry);
  }

  getEntries(): [string, SheetMapEntry][] {
    const entries: [string, SheetMapEntry][] = [];

    Object.entries(this.points).forEach(([key, entry]) => {
      if (!!entry) {
        entries.push([key, entry]);
      }
    });

    return entries;
  }

  getSumOfPoints({ id: sheetId, exercises }: HasExercises): number {
    return exercises.reduce((sum, ex) => {
      const pts = this.getPoints(new PointId(sheetId, ex)) || 0;

      return sum + pts;
    }, 0);
  }

  has(sheetId: string): boolean {
    return this.getEntry(sheetId) !== undefined;
  }

  hasPointEntry(id: string | PointId): boolean {
    const entry = this.getPointEntry(id);

    return entry !== undefined;
  }

  isEmpty(): boolean {
    return Object.entries(this.points).length === 0;
  }

  toDTO(): NewPointMapDTO {
    // TODO: Deep copy!
    return this.points;
  }
}

export type ExercisePointInfo = { must: number; bonus: number };

export function convertExercisePointInfoToString(exPointInfo: ExercisePointInfo): string {
  if (exPointInfo.must > 0 && exPointInfo.bonus > 0) {
    return `${exPointInfo.must} + ${exPointInfo.bonus}`;
  } else if (exPointInfo.bonus === 0) {
    return `${exPointInfo.must}`;
  } else {
    return `${exPointInfo.bonus} Bonus`;
  }
}

export function getPointsOfExercise(exercise: Exercise): ExercisePointInfo {
  const points: ExercisePointInfo = { must: 0, bonus: 0 };

  if (exercise.subexercises.length === 0) {
    if (exercise.bonus) {
      return { must: 0, bonus: exercise.maxPoints };
    } else {
      return { must: exercise.maxPoints, bonus: 0 };
    }
  }

  return exercise.subexercises.reduce((pts, subEx) => {
    if (subEx.bonus) {
      return { ...pts, bonus: pts.bonus + subEx.maxPoints };
    } else {
      return { ...pts, must: pts.must + subEx.maxPoints };
    }
  }, points);
}

export function getPointsOfAllExercises({ exercises }: HasExercises): ExercisePointInfo {
  return exercises.reduce(
    (pts, ex) => {
      const { must, bonus } = getPointsOfExercise(ex);

      return { must: pts.must + must, bonus: pts.bonus + bonus };
    },
    { must: 0, bonus: 0 }
  );
}
