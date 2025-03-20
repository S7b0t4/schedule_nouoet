import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class AuditoriumDeleteDto {
  @ApiProperty({
    description: 'ID of the auditorium',
    type: Number,
    example: 0,
  })
  @IsNumber()
  id: number
}

