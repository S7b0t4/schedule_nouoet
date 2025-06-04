import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Schedule } from 'src/schedule/schedule.model';

@Table({ tableName: 'subject' })
export class Subject extends Model<Subject> {
	@ApiProperty({
		description: 'title of the subject',
		type: String,
		example: 'Mатиматика',
	})
	@IsString()
	@Column({ type: DataType.STRING, allowNull: false })
	declare title: string;

	@HasMany(() => Schedule)
	schedules: Schedule[];
}
