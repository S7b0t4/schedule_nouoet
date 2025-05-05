import {
	Body,
	Controller,
	Delete,
	Get,
	Post,
	Put,
	Query,
} from '@nestjs/common';
import { Group } from './group.model';
import { GroupService } from './group.service';
import { GroupChangeDto } from './dto/group_change.dto';
import { GroupDeleteDto } from './dto/group_delete.dto';

@Controller('group')
export class GroupController {
	constructor(private readonly groupService: GroupService) { }
	@Post('/create')
	async create(@Body() dto: Group) {
		return await this.groupService.create(dto);
	}

	@Get('/get')
	async get() {
		return await this.groupService.get();
	}

	@Put('/update')
	async change(@Body() dto: GroupChangeDto) {
		return await this.groupService.change(dto);
	}

	@Delete('/delete')
	async delete(@Query('id') id: number) {
		return await this.groupService.delete(id);
	}
}
