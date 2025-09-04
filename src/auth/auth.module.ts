import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/user/user.model';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
	imports: [
		SequelizeModule.forFeature([User]),
		UserModule,
		JwtModule.register({
			secret: process.env.JWT_SECRET || 'supersecret',
			signOptions: { expiresIn: '200d' },
		}),
	],
	controllers: [AuthController],
	providers: [AuthService],
})
export class AuthModule { }
