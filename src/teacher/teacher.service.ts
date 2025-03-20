import { Injectable } from '@nestjs/common';
import { Teacher } from './teacher.model';
import { InjectModel } from '@nestjs/sequelize';
import { TeacherChangeDto } from './dto/teacher_change.dto';
import { TeacherDeleteDto } from './dto/teacher_delete.dto';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher) private teacherModel: typeof Teacher,
  ) { }

  async create(dto: Teacher) {
    return await this.teacherModel.create(dto)
  }

  async get() {
    return await this.teacherModel.findAll()
  }

  async change(dto: TeacherChangeDto) {
    const condidate = await this.teacherModel.update(dto, { where: { id: dto.id } })
    return condidate
  }

  async delete(dto: TeacherDeleteDto) {
    const condidate = await this.teacherModel.destroy({ where: { id: dto.id } })
    return condidate
  }
}
