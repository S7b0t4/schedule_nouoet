import { ApiProperty } from '@nestjs/swagger';

export class DesignerGroupByTimeAndGroupDto {
	@ApiProperty({
		description: 'start of this group',
		type: String,
		example: '2025-03-21T09:00:00+05:00',
	})
	start: string;
	@ApiProperty({
		description: 'end of this group',
		type: String,
		example: '2025-03-21T10:20:00+05:00',
	})
	end: string;
	@ApiProperty({
		description: 'group id',
		type: Number,
		example: 1,
	})
	groupId: number;
}
