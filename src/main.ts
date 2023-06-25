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
      transform: true, // Pasa al controlador una instancia del DTO en lugar de un objeto plano de JavaScript
      transformOptions: {
        enableImplicitConversion: true // Activa la conversión implícita de tipos durante la transformación. Por ejemplo, si viene un número como cadena, y se espera un número, hace la conversión a número
      }
    })
  );

  await app.listen( process.env.PORT );
  console.log( `App running on port ${ process.env.PORT }` );

}
bootstrap();
