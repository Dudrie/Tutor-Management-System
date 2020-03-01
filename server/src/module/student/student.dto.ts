import { IStudentDTO, StudentStatus, ICakeCountDTO } from '../../shared/model/Student';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEnum, IsEmail, IsOptional, IsNumber, Min, IsString } from 'class-validator';
import { IAttendanceDTO, AttendanceState } from '../../shared/model/Attendance';
import { IsLuxonDateTime } from '../../helpers/validators/luxon.validators';

export class StudentDTO implements IStudentDTO {
  @IsNotEmpty()
  firstname!: string;

  @IsNotEmpty()
  lastname!: string;

  @IsNotEmpty()
  @IsEnum(StudentStatus)
  status!: StudentStatus;

  @IsNotEmpty()
  tutorial!: string;

  @ApiProperty({ type: String })
  courseOfStudies?: string;

  @ApiProperty({ type: String })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ type: String })
  matriculationNo?: string;

  @ApiProperty({ type: String })
  team?: string;

  constructor(fields: IStudentDTO) {
    Object.assign(this, fields);
  }
}

export class AttendanceDTO implements IAttendanceDTO {
  @IsLuxonDateTime()
  date!: string;

  @IsOptional()
  @IsString()
  note?: string;

  @IsOptional()
  @IsEnum(AttendanceState)
  state?: AttendanceState;
}

export class CakeCountDTO implements ICakeCountDTO {
  @IsNumber()
  @Min(0)
  cakeCount!: number;
}
