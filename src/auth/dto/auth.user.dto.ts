import { ApiProperty } from '@nestjs/swagger';

export class UserAuthDto {
	@ApiProperty({
		description: 'email',
		type: String,
		example: 'toni.paun.00@mail.ru',
	})
	email: string;

	@ApiProperty({
		description: 'password',
		type: String,
		example: 'hash',
	})
	password: string;
}
