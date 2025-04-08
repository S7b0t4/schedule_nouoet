import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'auditorium' })
export class Auditorium extends Model<Auditorium> {
	@ApiProperty({
		description: 'Number of the teacher',
		type: String,
		example: 110,
	})
	@IsNumber()
	@Column({ type: DataType.INTEGER, allowNull: false })
	number: number;
}
