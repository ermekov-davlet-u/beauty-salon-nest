import { Module } from '@nestjs/common';
import { UslugiService } from './uslugi.service';
import { UslugiController } from './uslugi.controller';
import { Uslugi } from './entity/uslugi.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Uslugi])],
  controllers: [UslugiController],
  providers: [UslugiService]
})
export class UslugiModule {}
