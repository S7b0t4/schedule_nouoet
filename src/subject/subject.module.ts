import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Subject } from './subject.model';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';

@Module({
	imports: [SequelizeModule.forFeature([Subject])],
	controllers: [SubjectController],
	providers: [SubjectService],
})
export class SubjectModule {}
