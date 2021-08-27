import { NestFactory } from '@nestjs/core';
import { AppRouter } from './app.router';
var cors = require('cors')

async function bootstrap() {
  const app = await NestFactory.create(AppRouter, {
    logger: ['log', 'error', 'warn', 'debug'],
  });
  app.use(cors())
  await app.listen(3000);
}
bootstrap();


