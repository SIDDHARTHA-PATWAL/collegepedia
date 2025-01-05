import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { College } from '../college/college.entity';

@Entity()
export class CollegeWiseCourse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  courseName: string;

  @Column()
  courseDuration: string;

  @Column()
  course_fee: number;

  @ManyToOne(() => College, college => college.collegeWiseCourse)
  college: College;
}
