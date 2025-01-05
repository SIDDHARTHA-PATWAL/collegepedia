import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollegeWiseCourse } from './college-wise-course.entity';

@Injectable()
export class CollegeWiseCourseService {
  constructor(
    @InjectRepository(CollegeWiseCourse)
    private readonly collegeWiseCourseRepository: Repository<CollegeWiseCourse>,
  ) {}

  // Fetch all courses for a given college_id, sorted by course_fee
  async getCoursesByCollegeId(collegeId: number) {
    return this.collegeWiseCourseRepository.find({
      where: { college: { id: collegeId } },
      order: {
        course_fee: 'DESC',
      },
    });
  }
}
