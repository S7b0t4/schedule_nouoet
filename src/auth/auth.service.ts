import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User, UserCreationAttrs } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';
import { UserAuthDto } from './dto/auth.user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(User) private userModel: typeof User,
		private jwtService: JwtService,
		private readonly userService: UserService,
	) { }

	async registration(dto: UserAuthDto, res: Response) {
		const condidate = await this.userService.getByEmail(dto.email);
		const hash = await bcrypt.hash(dto.password, 10);
		const data: UserCreationAttrs = {
			email: dto.email,
			password: hash,
		};
		if (condidate) {
			const readyHash = condidate?.dataValues.password;
			const isMatch = await bcrypt.compare(dto.password, readyHash);
			const user = condidate?.dataValues;
			if (isMatch) {
				const token = this.generateTokens(user, res);
				return token;
			} else {
				throw new HttpException('Пароли не совподают', HttpStatus.BAD_REQUEST);
			}
		}
		const newUser = await this.userService.create(data);
		const user = newUser?.dataValues;
		const token = this.generateTokens(user, res);
		return token;
	}
	async authorisation(dto: UserAuthDto, res: Response) {
		const condidate = await this.userService.getByEmail(dto.email);
		console.log(condidate?.dataValues);
		if (!condidate) {
			throw new HttpException('Кандидат не найден!', HttpStatus.BAD_REQUEST);
		}
		const readyHash = condidate?.dataValues.password;
		const isMatch = await bcrypt.compare(dto.password, readyHash);
		if (isMatch) {
			const token = this.generateTokens(condidate.dataValues, res);
			return token;
		} else {
			throw new HttpException('Пароли не совподают', HttpStatus.BAD_REQUEST);
			return { message: 'Пароли не совподают' };
		}
	}

	private generateTokens(user: any, res: any) {
		const payload = { email: user.email, id: user.id };

		const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
		const refreshToken = this.jwtService.sign(payload, { expiresIn: '30d' });
		res.cookie('refresh_token', refreshToken, {
			httpOnly: true,
			sameSite: 'strict',
			http: false,
			secure: false,
			maxAge: 30 * 24 * 60 * 60 * 1000,
		});
		return accessToken;
	}

	login(user: UserAuthDto) {
		const payload = { email: user.email, password: user.password };
		return this.jwtService.sign(payload);
	}
}
