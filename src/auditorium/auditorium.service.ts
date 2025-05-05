import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuditoriumDeleteDto } from './dto/auditorium_delete.dto';
import { Auditorium } from './auditorium.model';
import { AuditoriumChangeDto } from './dto/auditorium_change.dto';

@Injectable()
export class AuditoriumService {
	constructor(
		@InjectModel(Auditorium) private auditoriumModel: typeof Auditorium,
	) { }

	async create(dto: Auditorium) {
		return await this.auditoriumModel.create(dto);
	}

	async get() {
		return await this.auditoriumModel.findAll({ order: [['id', 'ASC']] });
	}

	async change(dto: AuditoriumChangeDto) {
		const condidate = await this.auditoriumModel.update(dto, {
			where: { id: dto.id },
		});
		if (!condidate) {
			throw new NotFoundException(`Auditorium with id ${dto.id} not found`);
		}
		return condidate;
	}

	async delete(id: number) {
		const condidate = await this.auditoriumModel.destroy({
			where: { id: id },
		});
		if (!condidate) {
			throw new NotFoundException(`Auditorium with id ${id} not found`);
		}
		return condidate;
	}
}
