import {
	Body,
	Controller,
	Delete,
	Get,
	Post,
	Put,
	Query,
} from '@nestjs/common';
import { SubjectService } from './subject.service';
import { Subject } from './subject.model';
import { SubjectChangeDto } from './dto/subject_change.dto';
import { SubjectDeleteDto } from './dto/subject_delete.dto';

@Controller('subject')
export class SubjectController {
	constructor(private readonly subjectService: SubjectService) { }
	@Post('/create')
	async create(@Body() dto: Subject) {
		return await this.subjectService.create(dto);
	}

	@Get('/get')
	async get() {
		return await this.subjectService.get();
	}

	@Put('/update')
	async change(@Body() dto: SubjectChangeDto) {
		return await this.subjectService.change(dto);
	}

	@Delete('/delete')
	async delete(@Query('id') id: number) {
		return await this.subjectService.delete(id);
	}
}
