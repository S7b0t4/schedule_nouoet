import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User, UserCreationAttrs } from './user.model';

@Injectable()
export class UserService {
	constructor(@InjectModel(User) private userModel: typeof User) { }

	async create(dto: UserCreationAttrs) {
		return await this.userModel.create(dto);
	}

	async get() {
		return await this.userModel.findAll({ order: [['id', 'ASC']] });
	}

	async getByID(id: number) {
		const condidate = await this.userModel.findOne({ where: { id: id } });
		return condidate;
	}

	async getByEmail(email: string) {
		const condidate = await this.userModel.findOne({ where: { email: email } });
		return condidate;
	}
}
