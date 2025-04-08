import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ScheduleDeleteDto {
	@ApiProperty({
		description: 'ID of the schedule',
		type: Number,
		example: 1,
	})
	@IsNumber()
	id: number;
}
