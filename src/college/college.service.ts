import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { College } from './college.entity';
import { City } from '../city/city.entity';
import { State } from '../state/state.entity';

@Injectable()
export class CollegeService {
  constructor(
    @InjectRepository(College)
    private readonly collegeRepository: Repository<College>,
  ) {}

  // Filter colleges by city or state (or both)
  async filterColleges(cityName: string, stateName: string) {
    let query = this.collegeRepository.createQueryBuilder('college');

    // Filter by city if provided
    if (cityName) {
      const city = await this.collegeRepository.manager
        .getRepository(City)
        .findOne({ where: { name: cityName } });
      
      if (city) {
        query = query.andWhere('college.cityId = :cityId', { cityId: city.id });
      } else {
        throw new Error('City not found');
      }
    }

    // Filter by state if provided
    if (stateName) {
      const state = await this.collegeRepository.manager
        .getRepository(State)
        .findOne({ where: { name: stateName } });

      if (state) {
        query = query.andWhere('college.stateId = :stateId', { stateId: state.id });
      } else {
        throw new Error('State not found');
      }
    }

    return query.getMany();
  }
}
