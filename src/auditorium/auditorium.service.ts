import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuditoriumDeleteDto } from './dto/auditorium_delete.dto';
import { Auditorium } from './auditorium.model';
import { AuditoriumChangeDto } from './dto/auditorium_change.dto';

@Injectable()
export class AuditoriumService {
  constructor(
    @InjectModel(Auditorium) private auditoriumModel: typeof Auditorium,
  ) { }

  async create(dto: Auditorium) {
    return await this.auditoriumModel.create(dto)
  }

  async get() {
    return await this.auditoriumModel.findAll()
  }

  async change(dto: AuditoriumChangeDto) {
    const condidate = await this.auditoriumModel.update(dto, { where: { id: dto.id } })
    return condidate
  }

  async delete(dto: AuditoriumDeleteDto) {
    const condidate = await this.auditoriumModel.destroy({ where: { id: dto.id } })
    return condidate
  }
}
