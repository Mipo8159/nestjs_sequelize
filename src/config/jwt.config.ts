import { ConfigService } from '@nestjs/config';
export const JwtConfig = (config: ConfigService) => ({
  secret: config.get<string>('JWT_SECRET'),
  signOptions: { expiresIn: config.get<string>('JWT_EXPIRE') },
});
