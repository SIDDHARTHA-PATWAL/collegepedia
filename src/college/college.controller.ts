import { Controller, Get, Query } from '@nestjs/common';
import { CollegeService } from './college.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('colleges')
export class CollegeController {
  constructor(private readonly collegeService: CollegeService) {}

  @Get()
  @ApiQuery({ name: 'city', required: false, type: String })
  @ApiQuery({ name: 'state', required: false, type: String })
  async getColleges(
    @Query('city') city?: string,
    @Query('state') state?: string
  ) {
    return this.collegeService.filterColleges(city, state);
  }
}
