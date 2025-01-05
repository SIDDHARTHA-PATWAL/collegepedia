import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { College } from '../college/college.entity';

@Entity()
export class CollegePlacement {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(() => College, (college) => college.collegePlacements, { eager: true })
  college: College; 
  
  @Column()
  year: number;

  @Column()
  highest_placement: number;

  @Column()
  average_placement: number;

  @Column()
  median_placement :number

  @Column()
  placement_rate: number;

}
