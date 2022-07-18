import { PartialType } from '@nestjs/mapped-types';
import { CreateUslugiDto } from './create-uslugi.dto';

export class UpdateUslugiDto extends PartialType(CreateUslugiDto) {}
