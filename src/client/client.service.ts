import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entity/client.entity';

@Injectable()
export class ClientService {

  constructor( @InjectRepository(Client) 
  private readonly clientRepo: Repository<Client>){}

  create(createClientDto: CreateClientDto) {
    return this.clientRepo.save(createClientDto);
  }

  findAll() {
    return this.clientRepo.find();
  }

  findOne(id: number) {
    return this.clientRepo.findOne(id);
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
