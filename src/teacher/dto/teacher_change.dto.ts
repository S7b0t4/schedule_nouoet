import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class TeacherChangeDto {
  @ApiProperty({
    description: 'ID of the teacher',
    type: Number,
    example: 0,
  })
  @IsNumber()
  id: number
  @ApiProperty({
    description: "Name of the teacher",
    type: String,
    example: "Евгений",
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: "Surname of the teacher",
    type: String,
    example: "Сергачев",
  })
  @IsString()
  surame: string;

  @ApiProperty({
    description: "Patronymic of the teacher",
    type: String,
    example: "Николаевич",
  })
  @IsString()
  patronymic: string;


}

