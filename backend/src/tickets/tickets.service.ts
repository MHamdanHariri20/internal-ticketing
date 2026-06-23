import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket-status.dto';
import { ActivitiesService } from 'src/activities/activities.service';

@Injectable()
export class TicketsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly activitiesService: ActivitiesService,
  ) {}

  async create(createTicketDto: CreateTicketDto, userId: string) {
    return this.prisma.ticket.create({
      data: {
        ...createTicketDto,
        createdById: userId,
      },
    });
  }

  async findAll(user: any) {
    if (user.role === 'ADMIN') {
      return this.prisma.ticket.findMany({
        include: {
          createdBy: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
          assignedTo: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
    }
    return this.prisma.ticket.findMany({
      where: {
        createdById: user.id,
      },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        comments: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
              },
            },
          },
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
    });
    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }
    return ticket;
  }

  async updateStatus(
    id: string,
    updateTicketStatusDto: UpdateTicketStatusDto,
    user: any,
  ) {
    if (user.role !== 'ADMIN') {
      throw new ForbiddenException(
        'Hanya admin yang dapat mengubah status ticket',
      );
    }

    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
    });

    if (!ticket) {
      throw new NotFoundException('Ticket tidak ditemukan');
    }

    const oldStatus = ticket.status;

    const updatedTicket = await this.prisma.ticket.update({
      where: {
        id,
      },
      data: {
        status: updateTicketStatusDto.status,
      },
    });
    await this.activitiesService.createActivity({
      ticketId: ticket.id,
      userId: user.id,
      activity: "Status Tiket Diperbarui",
      oldStatus,
      newStatus: updateTicketStatusDto.status,
    });
    return updatedTicket;
  }
}
