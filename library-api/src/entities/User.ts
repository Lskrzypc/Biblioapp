import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type UserId = string & { __brand: 'User' };

@Entity('Users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UserId;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}

export default User;
