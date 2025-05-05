import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Schedule } from 'src/schedule/schedule.model';

@Table({ tableName: 'group' })
export class Group extends Model<Group> {
	@ApiProperty({
		description: 'title of the group',
		type: String,
		example: '2ПР1-24',
	})
	@IsString()
	@Column({ type: DataType.STRING, allowNull: false })
	title: string;

	@HasMany(() => Schedule)
	schedules: Schedule[];
}
