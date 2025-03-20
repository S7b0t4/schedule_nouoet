import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AuditoriumChangeDto {
  @ApiProperty({
    description: 'ID of the teacher',
    type: Number,
    example: 0,
  })
  @IsNumber()
  id: number
  @ApiProperty({
    description: 'number of this auditorium',
    type: Number,
    example: 110,
  })
  number: number

}

