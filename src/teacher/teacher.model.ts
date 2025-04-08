import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'teacher' })
export class Teacher extends Model<Teacher> {
	@ApiProperty({
		description: 'Name of the teacher',
		type: String,
		example: 'Евгений',
	})
	@IsString()
	@Column({ type: DataType.STRING, allowNull: false })
	name: string;

	@ApiProperty({
		description: 'Surname of the teacher',
		type: String,
		example: 'Сергачев',
	})
	@IsString()
	@Column({ type: DataType.STRING, allowNull: false })
	surname: string;

	@ApiProperty({
		description: 'Patronymic of the teacher',
		type: String,
		example: 'Николаевич',
	})
	@IsString()
	@Column({ type: DataType.STRING })
	patronymic: string;
}
