import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Default,
  DataType,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  @Column({ type: DataType.STRING(128) })
  id: string;

  @Column
  name: string;

  @Column
  age: number;

  @Column({
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({ type: DataType.INTEGER() })
  number: number;

  @Column
  password: string;
}
