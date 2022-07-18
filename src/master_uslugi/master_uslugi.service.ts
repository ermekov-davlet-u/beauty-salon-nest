import { Injectable } from '@nestjs/common';
import { CreateMasterUslugiDto } from './dto/create-master_uslugi.dto';
import { UpdateMasterUslugiDto } from './dto/update-master_uslugi.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MasterUslugi } from 'src/master_uslugi/entity/master_uslugi.entity';
import { Repository, getConnection } from 'typeorm';
import { Master } from 'src/master/entity/master.entity';

@Injectable()
export class MasterUslugiService {

  constructor( @InjectRepository(MasterUslugi) 
    private readonly muRepo: Repository<MasterUslugi>
  ){}

  create(createMasterUslugiDto: CreateMasterUslugiDto) {
    return this.muRepo.save(createMasterUslugiDto);
  }

  async findAll() {
    const newArr2 = await getConnection()
    .createQueryBuilder(MasterUslugi, "master_uslugi")
    .innerJoinAndSelect("master_uslugi.master", "master")
    .innerJoinAndSelect("master_uslugi.muslugi", "uslugi")
    .innerJoinAndSelect("uslugi.category", "category")
    .getMany()
    return newArr2;
  }

  async findAllSelect() {

    const newArr = await getConnection()
    .createQueryBuilder(MasterUslugi, "master_uslugi")
    .innerJoinAndSelect("master_uslugi.master", "master")
    .innerJoinAndSelect("master_uslugi.muslugi", "uslugi")
    .getMany()

    // const newArr2 = await getConnection()
    // .createQueryBuilder(Master, "master")
    // .innerJoinAndSelect("master", "master_uslugi.master")
    // .innerJoinAndSelect("master_uslugi.muslugi", "uslugi")
    // .getMany()

    // console.log(newArr);
    
    return newArr
    
  }

  findOne(id: number) {
    return this.muRepo.findOne(id);
  }

  update(id: number, updateMasterUslugiDto: UpdateMasterUslugiDto) {
    return `This action updates a #${id} masterUslugi`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterUslugi`;
  }
}
