import { Injectable, NotFoundException } from '@nestjs/common';
import { Teacher } from './teacher.model';
import { InjectModel } from '@nestjs/sequelize';
import { TeacherChangeDto } from './dto/teacher_change.dto';

@Injectable()
export class TeacherService {
	constructor(@InjectModel(Teacher) private teacherModel: typeof Teacher) {}

	async create(dto: Teacher) {
		console.log(dto);
		return await this.teacherModel.create(dto);
	}

	async get() {
		return await this.teacherModel.findAll({ order: [['id', 'ASC']] });
	}

	async change(dto: TeacherChangeDto) {
		const condidate = await this.teacherModel.update(dto, {
			where: { id: dto.id },
		});
		if (!condidate) {
			throw new NotFoundException(`Teacher with id ${dto.id} not found`);
		}
		return condidate;
	}

	async delete(id: number) {
		const condidate = await this.teacherModel.destroy({
			where: { id: id },
		});
		if (!condidate) {
			throw new NotFoundException(`Teacher with id ${id} not found`);
		}
		return condidate;
	}
}
