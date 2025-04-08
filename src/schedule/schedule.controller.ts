import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ScheduleChangeDto } from './dto/schedule_change.dto';
import { Schedule } from './schedule.model';
import { ScheduleDeleteDto } from './dto/schedule_delete.dto';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
	constructor(private readonly scheduleService: ScheduleService) {}
	@Post('/create')
	async create(@Body() dto: Schedule) {
		return await this.scheduleService.create(dto);
	}

	@Get('/get')
	async get() {
		return await this.scheduleService.get();
	}

	@Put('/update')
	async change(@Body() dto: ScheduleChangeDto) {
		return await this.scheduleService.change(dto);
	}

	@Delete('/delete')
	async delete(@Body() dto: ScheduleDeleteDto) {
		return await this.scheduleService.delete(dto);
	}
}
