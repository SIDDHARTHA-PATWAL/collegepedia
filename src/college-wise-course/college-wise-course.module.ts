import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegeWiseCourseService } from './college-wise-course.service';
import { CollegeWiseCourseController } from './college-wise-course.controller';
import { CollegeWiseCourse } from './college-wise-course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CollegeWiseCourse])], // Register the entity
  providers: [CollegeWiseCourseService],
  controllers: [CollegeWiseCourseController],
  exports: [CollegeWiseCourseService], 
})
export class CollegeWiseCourseModule {}
