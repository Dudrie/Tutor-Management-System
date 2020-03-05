import { HasId } from 'shared/model/Common';
import { ScheinCriteriaSummary } from 'shared/model/ScheinCriteria';
import { IStudent } from 'shared/model/Student';
import { ITutorial } from 'shared/model/Tutorial';
import { IUser } from 'shared/model/User';

export interface UserWithFetchedTutorials extends Omit<IUser, 'tutorials' | 'tutorialsToCorrect'> {
  tutorials: ITutorial[];
  tutorialsToCorrect: ITutorial[];
}

export interface TutorialWithFetchedTutor extends Omit<ITutorial, 'tutor'> {
  tutor?: IUser;
}

export interface TutorialWithFetchedStudents extends Omit<ITutorial, 'students'> {
  // tutor?: User;
  students: IStudent[];
}

export interface TutorialWithFetchedCorrectors extends Omit<ITutorial, 'tutor' | 'correctors'> {
  tutor?: IUser;
  correctors: IUser[];
}

export interface HasPoints extends HasId {
  points: PointMapDTO;
}

export interface StudentByTutorialSlotSummaryMap {
  [tutorialSlot: string]: ScheinCriteriaSummary[];
}
