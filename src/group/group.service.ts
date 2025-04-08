import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Group } from './group.model';
import { GroupChangeDto } from './dto/group_change.dto';
import { GroupDeleteDto } from './dto/group_delete.dto';

@Injectable()
export class GroupService {
	constructor(@InjectModel(Group) private groupModel: typeof Group) {}

	async create(dto: Group) {
		return await this.groupModel.create(dto);
	}

	async get() {
		return await this.groupModel.findAll({ order: [['id', 'ASC']] });
	}

	async change(dto: GroupChangeDto) {
		const condidate = await this.groupModel.update(dto, {
			where: { id: dto.id },
		});
		if (!condidate) {
			throw new NotFoundException(`Subject with id ${dto.id} not found`);
		}
		return condidate;
	}

	async delete(dto: GroupDeleteDto) {
		const condidate = await this.groupModel.destroy({ where: { id: dto.id } });
		if (!condidate) {
			throw new NotFoundException(`Subject with id ${dto.id} not found`);
		}
		return condidate;
	}
}
