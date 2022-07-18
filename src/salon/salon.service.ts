import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSalonDto } from './dto/create-salon.dto';
import { UpdateSalonDto } from './dto/update-salon.dto';
import { Salon } from './entity/salon.entity';

@Injectable()
export class SalonService {
  constructor(
    @InjectRepository(Salon)
    private readonly salonRepo: Repository<Salon>
  ){}
  create(createSalonDto: CreateSalonDto) {
     try {
      const salon = this.salonRepo.save(createSalonDto)
      return salon;       
     } catch (error) {
      console.log(error.message)
      return "Возникли проблемы при добавлении нового салона! Проверьте выши данные пожалуйста."
     }
  }

  findAll() {
    try {
      return this.salonRepo.find();
    } catch (error) {
      console.log(error.message)
    }
    
  }

  findOne(id: number) {
    return this.salonRepo.findOne(id);
  }

  update(id: number, updateSalonDto: UpdateSalonDto) {
    try {
      return this.salonRepo.update(id, updateSalonDto);
    } catch (error) {
      console.log(error.message)
      return "Возникли проблемы при изменении данных салона! Проверьте выши данные пожалуйста."
    }
  }


  remove(id: number) {
    try {
      return this.salonRepo.delete(id);
    } catch (error) {
      console.log(error.message)
    }
  }
}
