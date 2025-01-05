import { Controller, Get, Param } from '@nestjs/common';
import { CollegePlacementService } from './college-placement.service';

@Controller('college_data')
export class CollegePlacementController {
  constructor(private readonly collegePlacementService: CollegePlacementService) {}

  // Endpoint: /college_data/[college_id]
  @Get(':collegeId')
  async getCollegePlacementData(@Param('collegeId') collegeId: number) {
    try {
      // Ensuring valid collegeId
      if (!collegeId || isNaN(collegeId)) {
        throw new Error('Invalid college ID');
      }

      const avgSection = await this.collegePlacementService.getAveragePlacementsByYear(collegeId);
      const placementSection = await this.collegePlacementService.getPlacementTrend(collegeId);

      return {
        avg_section: avgSection,
        placement_section: placementSection,
      };
    } catch (error) {
      console.error('Error fetching college placement data:', error);
      return { message: 'Internal server error', error: error.message };
    }
  }
}
