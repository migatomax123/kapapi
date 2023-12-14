import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { AutoresModule } from '../auth/kapauth.module';
import { AparatosModule } from '../aparatos/kapaparatos.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ AutoresModule,
  AparatosModule
  ]
})
export class SeedModule {}
