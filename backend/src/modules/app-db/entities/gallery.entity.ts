import { Entity, Column, ManyToOne, Index } from 'typeorm';
import { LabeledEntity } from './labeled.entity';
import { Country } from './country.entity';
import { User } from './user.entity';

@Entity()
@Index(['name', 'userId'], { unique: true })
@Index(['label', 'userId'], { unique: true })
export class Gallery extends LabeledEntity {

  @Column('text')
  description: string;

  @Column('text')
  address: string;

  @ManyToOne(() => Country)
  country: Country;

  @Column({ nullable: true })
  countryId: string;

  @Column('text')
  gps: string;

  @Column({ type: 'boolean', default: true })
  public: boolean;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @Column({ nullable: true })
  userId: string;

}
