import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ActivitiesService } from 'src/activities/activities.service';

@Injectable()
export class CommentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly activitiesService: ActivitiesService,
  ) {}

  async create(
    ticketId: string,
    createCommentDto: CreateCommentDto,
    userId: string,
  ) {
    const ticket = await this.prisma.ticket.findUnique({
      where: {
        id: ticketId,
      },
    });

    if (!ticket) {
      throw new NotFoundException('Ticket tidak ditemukan');
    }

    const comment = await this.prisma.ticketComment.create({
      data: {
        ticketId,
        userId,
        comment: createCommentDto.comment,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    await this.activitiesService.createActivity({
      ticketId,
      userId,
      activity: 'Menambahkan komentar',
    });
    return comment;
  }
}
