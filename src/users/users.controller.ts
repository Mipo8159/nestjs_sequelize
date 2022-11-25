import { UserModel } from '@app/users/users.model';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'user creation' })
  @ApiResponse({ status: 200, type: UserModel, description: 'user created' })
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
  }

  @ApiOperation({ summary: 'user retrieving' })
  @ApiResponse({
    status: 200,
    type: [UserModel],
    description: 'users retrieved',
  })
  @Get()
  findAllUsers() {
    return this.usersService.findAllUsers();
  }
}
