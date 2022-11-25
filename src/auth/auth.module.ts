import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtConfig } from '@app/config/jwt.config';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: JwtConfig,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtModule],
})
export class AuthModule {}
