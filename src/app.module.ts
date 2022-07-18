import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalonModule } from './salon/salon.module';
import { TimeModule } from './time/time.module';
import { UslugiModule } from './uslugi/uslugi.module';
import { CategoryModule } from './category/category.module';
import { MasterModule } from './master/master.module';
import { ClientModule } from './client/client.module';
import { MasterUslugiModule } from './master_uslugi/master_uslugi.module';
import { StatusModule } from './status/status.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [ TypeOrmModule.forRoot(),SalonModule, TimeModule, UslugiModule, CategoryModule, MasterModule, ClientModule, MasterUslugiModule, StatusModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
