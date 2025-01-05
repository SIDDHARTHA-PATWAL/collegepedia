import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { College } from '../college/college.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => College, college => college.city)
  colleges: College[];
}
