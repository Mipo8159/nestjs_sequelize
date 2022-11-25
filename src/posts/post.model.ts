import { UserModel } from '@app/users/users.model';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'post' })
export class PostModel extends Model<PostModel, PostCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @Column({ type: DataType.STRING })
  image: string;

  @ForeignKey(() => UserModel)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => UserModel)
  author: UserModel;
}
