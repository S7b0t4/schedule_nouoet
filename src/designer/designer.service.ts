import { InjectModel } from '@nestjs/sequelize';
import { DesignerGroupByTimeDto } from './dto/designer_group_by_time.dto';
import { Schedule } from 'src/schedule/schedule.model';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { DesignerGroupByTimeAndGroupDto } from './dto/designer.group_by_time_and_group.dto';
import { Subject } from 'src/subject/subject.model';

@Injectable()
export class DesignerService {
	constructor(
		@InjectModel(Schedule) private scheduleModel: typeof Schedule,
		@InjectModel(Subject) private subjectModel: typeof Subject,
	) {}

	async create_group_by_time(dto: DesignerGroupByTimeDto) {
		console.log('hello');
		try {
			const group = await this.scheduleModel.findAll({
				where: {
					startDate: {
						[Op.between]: [dto.start, dto.end],
					},
				},
				include: [this.subjectModel],
			});
			return group;
		} catch (e) {
			throw new BadRequestException(e);
		}
	}

	async create_group_by_time_and_group(dto: DesignerGroupByTimeAndGroupDto) {
		try {
			const group = await this.scheduleModel.findAll({
				where: {
					startDate: {
						[Op.between]: [dto.start, dto.end],
					},
					group_id: dto.groupId,
				},
			});
			return group;
		} catch (e) {
			throw new BadRequestException(e);
		}
	}
}
