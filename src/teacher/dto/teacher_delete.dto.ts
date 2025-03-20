import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class TeacherDeleteDto {
  @ApiProperty({
    description: 'ID of the teacher',
    type: Number,
    example: 0,
  })
  @IsNumber()
  id: number
}

