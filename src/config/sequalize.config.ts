import { RoleModel } from '@app/roles/roles.model';
import { UserRolesModel } from '@app/roles/user-roles.model';
import { UserModel } from '@app/users/users.model';
import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const ConnectSequelize = async (
  configService: ConfigService,
): Promise<SequelizeModuleOptions> => ({
  dialect: configService.get<'postgres' | 'mysql'>('SQ_TYPE'),
  host: configService.get<string>('SQ_HOST'),
  port: configService.get<number>('SQ_PORT'),
  username: configService.get<string>('SQ_USERNAME'),
  password: configService.get<string>('SQ_PASSWORD'),
  database: configService.get<string>('SQ_DATABASE'),
  models: [UserModel, RoleModel, UserRolesModel],
  autoLoadModels: true,
});
