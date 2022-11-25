import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UsersController } from '@app/users/users.controller';
import { UsersService } from '@app/users/users.service';
import { UserModel } from '@app/users/users.model';
import { RoleModel } from '@app/roles/roles.model';
import { UserRolesModel } from '@app/roles/user-roles.model';
import { RolesModule } from '@app/roles/roles.module';

@Module({
  imports: [
    SequelizeModule.forFeature([UserModel, RoleModel, UserRolesModel]),
    RolesModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
