import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { ActivitiesModule } from 'src/activities/activities.module';

@Module({
  imports: [
    PrismaModule,
    ActivitiesModule,
],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule {}
