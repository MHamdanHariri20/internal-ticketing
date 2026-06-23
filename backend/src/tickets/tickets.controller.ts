import { Controller, UseGuards, Post, Get, } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
import { TicketsService } from './tickets.service';

@UseGuards(JwtAuthGuard) // Add appropriate guards here, e.g., JwtAuthGuard
@Controller('tickets')
export class TicketsController {
  constructor(
    private readonly ticketsService: TicketsService,
  ) {}

  @Post()
  create() {}

  @Get()
  findAll() {}

  @Get(':id')
  findOne() {}
}
