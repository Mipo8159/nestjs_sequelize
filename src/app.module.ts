import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConnectSequelize } from '@app/config/sequalize.config';
import { UsersModule } from '@app/users/users.module';
import { FilesModule } from './files/files.module';
import { RolesModule } from './roles/roles.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: ConnectSequelize,
    }),
    UsersModule,
    FilesModule,
    RolesModule,
    PostsModule,
    AuthModule,
  ],
})
export class AppModule {}
