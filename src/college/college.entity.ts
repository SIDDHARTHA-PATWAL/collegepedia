import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { City } from '../city/city.entity';
import { State } from '../state/state.entity';
import { CollegeWiseCourse } from 'src/college-wise-course/college-wise-course.entity';
import { CollegePlacement } from 'src/college-placement/college-placement.entity';

@Entity()
export class College {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('int')
  score: number;

  @ManyToOne(() => City, (city) => city.colleges)
  city: City;

  @ManyToOne(() => State, (state) => state.colleges)
  state: State;

  @OneToMany(() => CollegeWiseCourse, (collegeWiseCourse) => collegeWiseCourse.college)
  collegeWiseCourse: CollegeWiseCourse[];

  @OneToMany(() => CollegePlacement, (collegePlacement) => collegePlacement.college)
  collegePlacements: CollegePlacement[];
}
