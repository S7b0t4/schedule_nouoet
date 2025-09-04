import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TeacherModule } from './teacher/teacher.module';
import { AuditoriumModule } from './auditorium/auditorium.module';
import { SubjectModule } from './subject/subject.module';
import { GroupModule } from './group/group.module';
import { ScheduleModule } from './schedule/schedule.module';
import { DesignerModule } from './designer/designer.module';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		TeacherModule,
		AuditoriumModule,
		SubjectModule,
		GroupModule,
		ScheduleModule,
		DesignerModule,
		UserModule,
		AuthModule,
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: 'localhost',
			port: Number(process.env.POSTGRES_PORT),
			username: process.env.POSTGRES_USERNAME,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DB,
			autoLoadModels: true,
			synchronize: true,
		}),
	],
})
export class AppModule { }
