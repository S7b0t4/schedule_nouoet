import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { Teacher } from './teacher.model';
import { TeacherChangeDto } from './dto/teacher_change.dto';
import { TeacherDeleteDto } from './dto/teacher_delete.dto';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) { }
  @Post('/create')
  async create(@Body() dto: Teacher) {
    this.teacherService.create(dto)
  }

  @Get('/get')
  async get() {
    return this.teacherService.get()
  }

  @Put('/update')
  async change(@Body() dto: TeacherChangeDto) {
    return await this.teacherService.change(dto)
  }

  @Delete('/delete')
  async delete(@Body() dto: TeacherDeleteDto) {
    return await this.teacherService.delete(dto)
  }

}
