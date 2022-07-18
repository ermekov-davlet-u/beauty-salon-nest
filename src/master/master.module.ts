import { Module } from '@nestjs/common';
import { MasterService } from './master.service';
import { MasterController } from './master.controller';
import { Master } from './entity/master.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Master])],
  controllers: [MasterController],
  providers: [MasterService]
})
export class MasterModule {}
