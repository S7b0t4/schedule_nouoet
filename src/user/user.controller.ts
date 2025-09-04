import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) { }
	@Post('/create')
	async create_user(@Body() dto: User) {
		return await this.userService.create(dto);
	}

	@Get('/get')
	async get() {
		return await this.userService.get();
	}

	@Get('/getByID/:id')
	async getByID(@Param() id: string) {
		return await this.userService.getByID(Number(id));
	}
}
