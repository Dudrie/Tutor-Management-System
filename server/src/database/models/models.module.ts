import { DynamicModule, Global, Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { AttendanceModel } from './attendance.model';
import { ScheincriteriaModel } from './scheincriteria.model';
import { ScheinexamModel } from './scheinexam.model';
import { SettingsModel } from './settings.model';
import { SheetModel } from './sheet.model';
import { ShortTestModel } from './shortTest.model';
import { StudentModel } from './student.model';
import { TeamModel } from './team.model';
import { TutorialModel } from './tutorial.model';
import { UserModel } from './user.model';

@Global()
@Module({})
export class ModelsModule {
    static init(): DynamicModule {
        const moduleWithModels = TypegooseModule.forFeature([
            AttendanceModel,
            StudentModel,
            TeamModel,
            TutorialModel,
            UserModel,
            SheetModel,
            ScheinexamModel,
            ScheincriteriaModel,
            SettingsModel,
            ShortTestModel,
        ]);

        return {
            module: ModelsModule,
            imports: [moduleWithModels],
            exports: [moduleWithModels],
        };
    }
}
