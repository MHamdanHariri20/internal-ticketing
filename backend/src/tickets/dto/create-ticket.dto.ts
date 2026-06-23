import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import { TicketCategory, TicketPriority } from '@prisma/client';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsEnum(TicketCategory)
  category: TicketCategory;

  @IsEnum(TicketPriority)
  priority: TicketPriority;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsString()
  attachmentUrl?: string;
}