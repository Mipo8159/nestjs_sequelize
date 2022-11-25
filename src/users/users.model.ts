import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { RoleModel } from '@app/roles/roles.model';
import { UserRolesModel } from '@app/roles/user-roles.model';
import { PostModel } from '@app/posts/post.model';

interface UserCreationAttributes {
  email: string;
  password: string;
}

@Table({ tableName: 'user' })
export class UserModel extends Model<UserModel, UserCreationAttributes> {
  @ApiProperty({ example: '1', description: 'unique identificator' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'user@mail.ru', description: 'email address' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: '12345678', description: 'password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: 'true', description: 'banned or not' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: 'for griefing', description: 'reason for ban' })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @BelongsToMany(() => RoleModel, () => UserRolesModel)
  roles: RoleModel[];

  @HasMany(() => PostModel)
  posts: PostModel[];
}
