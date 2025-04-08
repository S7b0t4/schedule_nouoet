import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class GroupDeleteDto {
	@ApiProperty({
		description: 'ID of the group',
		type: Number,
		example: 1,
	})
	@IsNumber()
	id: number;
}
