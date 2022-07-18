import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Master } from 'src/master/entity/master.entity';
import { MasterUslugi } from 'src/master_uslugi/entity/master_uslugi.entity';
import { createQueryBuilder, getConnection, getManager, Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entity/order.entity';

@Injectable()
export class OrderService {

  constructor( @InjectRepository(Order)
  private readonly orderRepo: Repository<Order> ){}

  async create(createOrderDto: CreateOrderDto) {

    // const res = await getConnection()
    // .createQueryBuilder(Order, "order")
    // .where({})

    const order = await this.orderRepo.findOne({
      where: {
        time: createOrderDto.time,
        OrderDate: createOrderDto.OrderDate,
        mu: createOrderDto.mu
      }
    })

    if(!order){
      return this.orderRepo.save(createOrderDto);
    }else{
      return { message: "Время не свободна" }
    }

    
  }

  async findAll() {

    const master = await getConnection()
    .createQueryBuilder(Order,"order")
    .innerJoinAndSelect('order.mu', 'master_uslugi')
    .innerJoinAndSelect('order.client', 'client')
    .innerJoinAndSelect('order.time', 'time')
    .innerJoinAndSelect('master_uslugi.master', 'master')
    .innerJoinAndSelect('master_uslugi.muslugi', 'uslugi')
    .orderBy("time.idTime")
    .getMany()

    

    return master;
  }

  async reportAll() {
    const master = await getConnection()
    .getRepository(Order)
    .createQueryBuilder("order")
    .innerJoinAndSelect("order.mu", "master_uslugi")
    .where("order.OrderDate = :date", { date: "2022-06-08" })
    .select("master_uslugi.master")
    .addSelect("SUM(master_uslugi.muPrice)", "sum")
    .innerJoinAndSelect('master_uslugi.master', 'master')
    .groupBy("master_uslugi.id_mu")
    .addGroupBy("master.id_master")
    .getRawMany()
    console.log(master);
    
    return master;
  }



  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  async update(id: number, updateOrderDto: { orderDone: boolean }) {
    const order = await this.orderRepo.findOne(id)
    order.orderDone = updateOrderDto.orderDone

    return  this.orderRepo.save(order)
  }

  remove(id: number) {
    return this.orderRepo.delete(id);
  }
}
