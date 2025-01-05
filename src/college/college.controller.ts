import { Controller, Get, Query } from '@nestjs/common';
import { CollegeService } from './college.service';

@Controller('colleges')
export class CollegeController {
  constructor(private readonly collegeService: CollegeService) {}

  // Endpoint: /colleges with city and/or state query parameters
  @Get()
  async getColleges(@Query('city') city: string, @Query('state') state: string) {
    return this.collegeService.filterColleges(city, state);
  }
}
