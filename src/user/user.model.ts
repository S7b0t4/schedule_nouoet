import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

export interface UserCreationAttrs {
	email: string;
	password: string;
}

@Table({ tableName: 'user' })
export class User extends Model<User, UserCreationAttrs> {
	@ApiProperty({
		description: 'User email',
	})
	@IsString()
	@Column({ type: DataType.STRING, allowNull: false })
	email: string;

	@ApiProperty({
		description: 'User password',
	})
	@IsString()
	@Column({ type: DataType.STRING, allowNull: false })
	password: string;
}
