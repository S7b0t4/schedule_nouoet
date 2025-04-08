import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AuditoriumService } from './auditorium.service';
import { AuditoriumChangeDto } from './dto/auditorium_change.dto';
import { Auditorium } from './auditorium.model';
import { AuditoriumDeleteDto } from './dto/auditorium_delete.dto';

@Controller('auditorium')
export class AuditoriumController {
	constructor(private readonly auditoriumService: AuditoriumService) {}
	@Post('/create')
	async create(@Body() dto: Auditorium) {
		return await this.auditoriumService.create(dto);
	}

	@Get('/get')
	async get() {
		return await this.auditoriumService.get();
	}

	@Put('/update')
	async change(@Body() dto: AuditoriumChangeDto) {
		return await this.auditoriumService.change(dto);
	}

	@Delete('/delete')
	async delete(@Body() dto: AuditoriumDeleteDto) {
		return await this.auditoriumService.delete(dto);
	}
}
