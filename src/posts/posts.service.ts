import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from '../files/files.service';
import { PostModel } from './post.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(PostModel) private postRepository: typeof PostModel,
    private fileService: FilesService,
  ) {}

  async create(dto: CreatePostDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const post = await this.postRepository.create({ ...dto, image: fileName });
    return post;
  }
}
