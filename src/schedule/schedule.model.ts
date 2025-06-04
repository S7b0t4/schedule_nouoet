import { ApiProperty } from '@nestjs/swagger';
import {
	Table,
	Column,
	Model,
	ForeignKey,
	DataType,
	BelongsTo,
} from 'sequelize-typescript';
import { Auditorium } from 'src/auditorium/auditorium.model';
import { Group } from 'src/group/group.model';
import { Subject } from 'src/subject/subject.model';
import { Teacher } from 'src/teacher/teacher.model';

@Table({ tableName: 'schedule' })
export class Schedule extends Model<Schedule> {
	@ApiProperty({
		type: Number,
		example: 1,
	})
	@ForeignKey(() => Auditorium)
	@Column({
		onDelete: 'CASCADE',
	})
	auditorium_id: number;

	@BelongsTo(() => Auditorium)
	auditorium: Auditorium;

	@ApiProperty({
		type: Number,
		example: 1,
	})
	@ForeignKey(() => Group)
	@Column({
		onDelete: 'CASCADE',
	})
	group_id: number;

	@ApiProperty({
		type: Number,
		example: 1,
	})
	@ForeignKey(() => Subject)
	@Column({
		onDelete: 'CASCADE',
	})
	subject_id: number;

	@BelongsTo(() => Subject)
	subject: Subject;

	@ApiProperty({
		type: Number,
		example: 1,
	})
	@ForeignKey(() => Teacher)
	@Column({
		onDelete: 'CASCADE',
	})
	teacher_id: number;

	@BelongsTo(() => Teacher)
	teacher: Teacher;

	@ApiProperty({
		type: String,
		example: '',
	})
	@Column
	regard: string;

	@ApiProperty({
		example: '2025-03-21T09:00:00+05:00',
	})
	@Column({ type: DataType.DATE })
	startDate: Date;

	@ApiProperty({
		example: '2025-03-21T10:20:00+05:00',
	})
	@Column({ type: DataType.DATE })
	endDate: Date;
}
