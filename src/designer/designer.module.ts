import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DesignerService } from './designer.service';
import { Schedule } from 'src/schedule/schedule.model';
import { DesignerController } from './designer.controller';
import { Subject } from 'src/subject/subject.model';
import { Teacher } from 'src/teacher/teacher.model';
import { Group } from 'src/group/group.model';
import { Auditorium } from 'src/auditorium/auditorium.model';

@Module({
	imports: [
		SequelizeModule.forFeature([Schedule, Subject, Teacher, Group, Auditorium]),
	],
	controllers: [DesignerController],
	providers: [DesignerService],
})
export class DesignerModule {}
