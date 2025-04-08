import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class SubjectChangeDto {
	@ApiProperty({
		description: 'ID of the subject',
		type: Number,
		example: 1,
	})
	@IsNumber()
	id: number;
	@ApiProperty({
		description: 'title of this subject',
		type: String,
		example: 'История',
	})
	title: string;
}
