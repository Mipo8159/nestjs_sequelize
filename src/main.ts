if (process.env.IS_TS_NODE) {
  require('module-alias/register');
}
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from './pipes/validation.pipe';

async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Sequalify')
    .setDescription('sequalize app')
    .setVersion('1.0.0')
    .addTag('Mip')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
}

bootstrap();
