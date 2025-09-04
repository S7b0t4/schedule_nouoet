import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserAuthDto } from './dto/auth.user.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) { }

	@Post('/registration')
	async registration(
		@Body() dto: UserAuthDto,
		@Res({ passthrough: true }) res: Response,
	) {
		return await this.authService.registration(dto, res);
	}

	@Post('/authorisation')
	async authrorisation(
		@Body() dto: UserAuthDto,
		@Res({ passthrough: true }) res: Response,
	) {
		return await this.authService.authorisation(dto, res);
	}
}
