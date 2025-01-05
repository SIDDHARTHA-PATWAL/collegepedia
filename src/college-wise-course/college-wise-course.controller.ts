import { Controller, Get, Param } from '@nestjs/common';
import { CollegeWiseCourseService } from './college-wise-course.service';

@Controller('college_courses')
export class CollegeWiseCourseController {
  constructor(private readonly collegeWiseCourseService: CollegeWiseCourseService) {}

  // Endpoint: /college_courses/{college_id}
  @Get(':collegeId')
  async getCourses(@Param('collegeId') collegeId: number) {
    return this.collegeWiseCourseService.getCoursesByCollegeId(collegeId);
  }
}
