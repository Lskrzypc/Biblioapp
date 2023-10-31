import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { ControllerModule } from 'library-api/src/controllers/controller.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const port = process.env.API_PORT ?? 3000;
  await app.listen(port);
}

bootstrap();
