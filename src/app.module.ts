import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TeacherController } from './teacher/teacher.controller';
import { TeacherModule } from './teacher/teacher.module';
import { Teacher } from './teacher/teacher.model';
import { AuditoriumModule } from './auditorium/auditorium.module';

@Module({
  imports: [
    TeacherModule,
    AuditoriumModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Teacher],
      autoLoadModels: true,
      synchronize: true,
    })
  ],
})
export class AppModule { }
