import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const PORT = process.env.PORT;
	app.enableCors({
		origin: process.env.CLIENT_URL,
		credential: true,
	});
	const config = new DocumentBuilder()
		.setTitle('Schedule')
		.setDescription('Schedule for NOUOET.ru')
		.setVersion('0.1')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);
	await app.listen(PORT ?? 4000);
	console.log('start on ', PORT);
}
bootstrap();
