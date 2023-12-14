import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SeedModule } from './modulos/seed/seed.module';
import { AutoresModule } from './modulos/auth/kapauth.module';
import { IncidenciasModule } from './modulos/incidencias/kapincidencias.module';
import { AparatosModule } from './modulos/aparatos/kapaparatos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SeedModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true
    }),
    SeedModule,
    AutoresModule,
    IncidenciasModule,
    AparatosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
