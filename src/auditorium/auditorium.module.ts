import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuditoriumController } from './auditorium.controller';
import { AuditoriumService } from './auditorium.service';
import { Auditorium } from './auditorium.model';

@Module({
  imports: [SequelizeModule.forFeature([Auditorium])],
  controllers: [AuditoriumController],
  providers: [AuditoriumService]
})
export class AuditoriumModule { }
