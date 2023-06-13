import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix( 'api/v2' );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina las propiedades que no estén en el DTO
      forbidNonWhitelisted: true, // No deja pasar las propiedades que no estén en el DTO
      transform: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  );

  await app.listen(3000);

}
bootstrap();
