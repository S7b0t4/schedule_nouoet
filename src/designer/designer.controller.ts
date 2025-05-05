import { Body, Controller, Post } from '@nestjs/common';
import { DesignerService } from './designer.service';
import { DesignerGroupByTimeDto } from './dto/designer_group_by_time.dto';
import { DesignerGroupByTimeAndGroupDto } from './dto/designer.group_by_time_and_group.dto';

@Controller('schedule')
export class DesignerController {
	constructor(private readonly designerService: DesignerService) { }

	@Post('/group_by_time')
	async create_group_by_time(@Body() dto: DesignerGroupByTimeDto) {
		return await this.designerService.create_group_by_time(dto);
	}

	@Post('/group_by_time_and_group')
	async create_group_by_time_and_group(
		@Body() dto: DesignerGroupByTimeAndGroupDto,
	) {
		return await this.designerService.create_group_by_time_and_group(dto);
	}
}
