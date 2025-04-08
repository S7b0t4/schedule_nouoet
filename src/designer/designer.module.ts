import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DesignerService } from './designer.service';
import { Schedule } from 'src/schedule/schedule.model';
import { DesignerController } from './designer.controller';

@Module({
	imports: [SequelizeModule.forFeature([Schedule])],
	controllers: [DesignerController],
	providers: [DesignerService],
})
export class DesignerModule {}
