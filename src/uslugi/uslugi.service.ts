import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { CreateUslugiDto } from './dto/create-uslugi.dto';
import { UpdateUslugiDto } from './dto/update-uslugi.dto';
import { Uslugi } from './entity/uslugi.entity';

@Injectable()
export class UslugiService {

  constructor( 
    @InjectRepository(Uslugi)
    private readonly uslugiRepo: Repository<Uslugi> ){}

  create(createUslugiDto: CreateUslugiDto) {
    return this.uslugiRepo.save(createUslugiDto)
  }

  findAll() {
    return getConnection()
    .createQueryBuilder(Uslugi, "uslugi")
    .innerJoinAndSelect("uslugi.category", "category")
    .getMany();;
  }

  findOne(id: number) {
    return `This action returns a #${id} uslugi`;
  }

  update(id: number, updateUslugiDto: UpdateUslugiDto) {
    return `This action updates a #${id} uslugi`;
  }

  remove(id: number) {
    return `This action removes a #${id} uslugi`;
  }
}
