import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollegePlacement } from './college-placement.entity';

@Injectable()
export class CollegePlacementService {
  constructor(
    @InjectRepository(CollegePlacement)
    private readonly collegePlacementRepository: Repository<CollegePlacement>,
  ) {}

  // Section 1: avg_section
  async getAveragePlacementsByYear(collegeId: number) {
    const placements = await this.collegePlacementRepository
      .createQueryBuilder('placement')
      .select('placement.year', 'year')
      .addSelect('AVG(placement.highest_placement)', 'highest_placement')
      .addSelect('AVG(placement.average_placement)', 'average_placement')
      .addSelect('AVG(placement.median_placement)', 'median_placement')
      .addSelect('AVG(placement.placement_rate)', 'placement_rate')
      .where('placement.collegeId = :collegeId', { collegeId })
      .andWhere('placement.highest_placement IS NOT NULL AND placement.highest_placement != 0')
      .andWhere('placement.average_placement IS NOT NULL AND placement.average_placement != 0')
      .andWhere('placement.median_placement IS NOT NULL AND placement.median_placement != 0')
      .andWhere('placement.placement_rate IS NOT NULL AND placement.placement_rate != 0')
      .groupBy('placement.year')
      .getRawMany();

    return placements;
  }

  // Section 2: placement_section
  async getPlacementTrend(collegeId: number) {
    const placements = await this.collegePlacementRepository
      .createQueryBuilder('placement')
      .select('placement.*')
      .addSelect(
        `(CASE 
            WHEN placement.placement_rate > LAG(placement.placement_rate) OVER (ORDER BY placement.year DESC) THEN 'UP'
            WHEN placement.placement_rate < LAG(placement.placement_rate) OVER (ORDER BY placement.year DESC) THEN 'DOWN'
            ELSE 'NO CHANGE'
        END)`,
        'placement_trend',
      )
      .where('placement.collegeId = :collegeId', { collegeId })
      .andWhere('placement.placement_rate IS NOT NULL AND placement.placement_rate != 0')
      .getRawMany();

    return placements;
  }
}
