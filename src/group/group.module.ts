import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Group } from './group.model';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';

@Module({
	imports: [SequelizeModule.forFeature([Group])],
	controllers: [GroupController],
	providers: [GroupService],
})
export class GroupModule {}
