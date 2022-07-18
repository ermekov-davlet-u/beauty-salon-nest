import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UslugiService } from './uslugi.service';
import { CreateUslugiDto } from './dto/create-uslugi.dto';
import { UpdateUslugiDto } from './dto/update-uslugi.dto';

@Controller('uslugi')
export class UslugiController {
  constructor(private readonly uslugiService: UslugiService) {}

  @Post()
  create(@Body() createUslugiDto: CreateUslugiDto) {
    return this.uslugiService.create(createUslugiDto);
  }

  @Get()
  findAll() {
    return this.uslugiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uslugiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUslugiDto: UpdateUslugiDto) {
    return this.uslugiService.update(+id, updateUslugiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uslugiService.remove(+id);
  }
}
