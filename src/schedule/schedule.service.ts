import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ScheduleChangeDto } from './dto/schedule_change.dto';
import { ScheduleDeleteDto } from './dto/schedule_delete.dto';
import { Schedule } from './schedule.model';

@Injectable()
export class ScheduleService {
	constructor(@InjectModel(Schedule) private teacherModel: typeof Schedule) {}

	async create(dto: Schedule) {
		try {
			return await this.teacherModel.create(dto);
		} catch (e) {
			throw new BadRequestException(e);
		}
	}

	async get() {
		return await this.teacherModel.findAll({ order: [['id', 'ASC']] });
	}

	async change(dto: ScheduleChangeDto) {
		const condidate = await this.teacherModel.update(dto, {
			where: { id: dto.id },
		});
		if (!condidate) {
			throw new NotFoundException(`Schedule with id ${dto.id} not found`);
		}
		return condidate;
	}

	async delete(dto: ScheduleDeleteDto) {
		const condidate = await this.teacherModel.destroy({
			where: { id: dto.id },
		});
		if (!condidate) {
			throw new NotFoundException(`Schedule with id ${dto.id} not found`);
		}
		return condidate;
	}
}
