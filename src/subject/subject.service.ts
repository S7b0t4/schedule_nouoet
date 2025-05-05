import { InjectModel } from '@nestjs/sequelize';
import { Subject } from './subject.model';
import { SubjectChangeDto } from './dto/subject_change.dto';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class SubjectService {
	constructor(@InjectModel(Subject) private subjectModel: typeof Subject) { }

	async create(dto: Subject) {
		return await this.subjectModel.create(dto);
	}

	async get() {
		return await this.subjectModel.findAll({ order: [['id', 'ASC']] });
	}

	async change(dto: SubjectChangeDto) {
		const condidate = await this.subjectModel.update(dto, {
			where: { id: dto.id },
		});
		if (!condidate) {
			throw new NotFoundException(`Subject with id ${dto.id} not found`);
		}
		return condidate;
	}

	async delete(id: number) {
		const condidate = await this.subjectModel.destroy({
			where: { id: id },
		});
		if (!condidate) {
			throw new NotFoundException(`Subject with id ${id} not found`);
		}
		return condidate;
	}
}
