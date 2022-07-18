import { Module } from '@nestjs/common';
import { MasterUslugiService } from './master_uslugi.service';
import { MasterUslugiController } from './master_uslugi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterUslugi } from './entity/master_uslugi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterUslugi])],
  controllers: [MasterUslugiController],
  providers: [MasterUslugiService]
})
export class MasterUslugiModule {}
