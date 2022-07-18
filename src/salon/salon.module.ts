import { Module } from '@nestjs/common';
import { SalonService } from './salon.service';
import { SalonController } from './salon.controller';
import { salonProvider } from './salon.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salon } from './entity/salon.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Salon])],
  controllers: [SalonController],
  providers: [
    ...salonProvider,
    SalonService
  ]
})
export class SalonModule {}
