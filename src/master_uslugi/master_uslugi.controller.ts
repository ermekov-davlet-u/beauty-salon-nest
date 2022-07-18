import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterUslugiService } from './master_uslugi.service';
import { CreateMasterUslugiDto } from './dto/create-master_uslugi.dto';
import { UpdateMasterUslugiDto } from './dto/update-master_uslugi.dto';

@Controller('master-uslugi')
export class MasterUslugiController {
  constructor(private readonly masterUslugiService: MasterUslugiService) {}

  @Post()
  create(@Body() createMasterUslugiDto: CreateMasterUslugiDto) {
    return this.masterUslugiService.create(createMasterUslugiDto);
  }

  @Get()
  findAll() {
    return this.masterUslugiService.findAll();
  }

  @Get("select")
  findAllSelect() {
    return this.masterUslugiService.findAllSelect();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterUslugiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterUslugiDto: UpdateMasterUslugiDto) {
    return this.masterUslugiService.update(+id, updateMasterUslugiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterUslugiService.remove(+id);
  }
}
