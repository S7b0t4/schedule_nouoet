import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class AuditoriumChangeDto {
	@ApiProperty({
		description: 'ID of the teacher',
		type: Number,
		example: 1,
	})
	@IsNumber()
	id: number;
	@ApiProperty({
		description: 'number of this auditorium',
		type: Number,
		example: 110,
	})
	number: number;
}
