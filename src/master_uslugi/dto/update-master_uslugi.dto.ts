import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterUslugiDto } from './create-master_uslugi.dto';

export class UpdateMasterUslugiDto extends PartialType(CreateMasterUslugiDto) {}
