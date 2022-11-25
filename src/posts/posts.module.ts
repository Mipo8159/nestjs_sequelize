import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from '../users/users.model';
import { FilesModule } from '../files/files.module';
import { PostModel } from './post.model';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [SequelizeModule.forFeature([UserModel, PostModel]), FilesModule],
})
export class PostsModule {}
