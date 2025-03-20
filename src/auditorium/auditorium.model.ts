import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'auditorium' })
export class Auditorium extends Model<Auditorium> {
  @ApiProperty({
    description: "Number of the teacher",
    type: String,
    example: 110,
  })
  @IsNumber()
  @Column({ type: DataType.INTEGER, unique: true })
  number: number;
}

