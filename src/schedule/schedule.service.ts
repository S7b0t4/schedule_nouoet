import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ScheduleChangeDto } from './dto/schedule_change.dto';
import { ScheduleDeleteDto } from './dto/schedule_delete.dto';
import { Schedule } from './schedule.model';
import { Op } from 'sequelize';
import { Fn, Where } from 'sequelize/types/utils';

@Injectable()
export class ScheduleService {
	constructor(@InjectModel(Schedule) private scheduleModel: typeof Schedule) {}

	async create(dto: Schedule) {
		const condidate = await this.scheduleModel.findOne({
			where: {
				startDate: dto.startDate,
				group_id: dto.group_id,
			},
		});
		if (!condidate) {
			try {
				return await this.scheduleModel.create(dto);
			} catch (e) {
				throw new BadRequestException(e);
			}
		} else {
			try {
				await this.scheduleModel.update(dto, {
					where: { id: condidate.id },
				});
			} catch (e) {
				throw new BadRequestException(e);
			}
		}
	}

	async get() {
		return await this.scheduleModel.findAll({ order: [['id', 'ASC']] });
	}

	async change(dto: ScheduleChangeDto) {
		const condidate = await this.scheduleModel.update(dto, {
			where: { id: dto.id },
		});
		if (!condidate) {
			throw new NotFoundException(`Schedule with id ${dto.id} not found`);
		}
		return condidate;
	}

	async delete(id: number) {
		const condidate = await this.scheduleModel.destroy({
			where: { id: id },
		});
		if (!condidate) {
			throw new NotFoundException(`Schedule with id ${id} not found`);
		}
		return condidate;
	}
}
