import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role, TicketStatus } from '@prisma/client';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async summary(user: any) {
    const where =
      user.role === Role.ADMIN
        ? {}
        : {
            createdById: user.id,
          };
    const [
      totalTickets,
      openTickets,
      inProgressTickets,
      doneTickets,
      rejectedTickets,
    ] = await Promise.all([
      this.prisma.ticket.count(),
      this.prisma.ticket.count({
        where: {
          status: TicketStatus.OPEN,
        },
      }),

      this.prisma.ticket.count({
        where: {
          status: TicketStatus.IN_PROGRESS,
        },
      }),

      this.prisma.ticket.count({
        where: {
          status: TicketStatus.DONE,
        },
      }),
      this.prisma.ticket.count({
        where: {
          status: TicketStatus.REJECTED,
        },
      }),
    ]);

    return {
      tickets: {
        total: totalTickets,
        open: openTickets,
        inProgress: inProgressTickets,
        done: doneTickets,
        rejected: rejectedTickets,
      },
    };
  }
}
