import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TicketStatus } from '@prisma/client';

@Injectable()
export class ActivitiesService {
  constructor(private readonly prisma: PrismaService) {}

  async createActivity(data: {
    ticketId: string,
    userId: string,
    activity: string,
    oldStatus?: TicketStatus,
    newStatus?: TicketStatus,
  }) {
    console.log('Activity:', data);
    return this.prisma.ticketActivity.create({
      data: {
        ticketId: data.ticketId,
        userId: data.userId,
        activity: data.activity,
        oldStatus: data.oldStatus,
        newStatus: data.newStatus,
      },
    });
  }
}
