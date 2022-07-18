import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { Master } from './entity/master.entity';

@Injectable()
export class MasterService {

  constructor( 
    @InjectRepository(Master)
    private readonly masterRepo: Repository<Master>
   ){}

  create(createMasterDto: CreateMasterDto) {
    return this.masterRepo.save(createMasterDto);
  }

  findAll() {
    return getConnection()
    .createQueryBuilder(Master, "master")
    .innerJoinAndSelect("master.status", "status")
    .getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} master`;
  }

  update(id: number, updateMasterDto: UpdateMasterDto) {
    return `This action updates a #${id} master`;
  }

  remove(id: number) {
    return `This action removes a #${id} master`;
  }
}
