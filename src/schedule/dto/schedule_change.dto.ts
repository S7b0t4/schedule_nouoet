import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class ScheduleChangeDto {
	@ApiProperty({
		type: Number,
		example: 1,
	})
	@IsNumber()
	id: number;
	@ApiProperty({
		type: Number,
		example: 1,
	})
	@IsNumber()
	auditorium_id: number;

	@ApiProperty({
		type: Number,
		example: 1,
	})
	@IsNumber()
	group_id: number;

	@ApiProperty({
		type: Number,
		example: 1,
	})
	@IsNumber()
	subject_id: number;

	@ApiProperty({
		type: Number,
		example: 1,
	})
	@IsNumber()
	teacher_id: number;

	@ApiProperty({
		type: String,
		example: 'Пересдача',
	})
	@IsString()
	regard: string;

	@ApiProperty({
		example: '2025-03-21T09:00:00+05:00',
	})
	@IsString()
	startDate: Date;

	@ApiProperty({
		example: '2025-03-21T09:00:00+05:00',
	})
	@IsString()
	endDate: Date;
}
