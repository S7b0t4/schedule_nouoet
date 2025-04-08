import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class GroupChangeDto {
	@ApiProperty({
		description: 'ID of the group',
		type: Number,
		example: 1,
	})
	@IsNumber()
	id: number;
	@ApiProperty({
		description: 'title of this group',
		type: String,
		example: '1Пр1-23',
	})
	title: string;
}
