import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  // Fetch all cities
  async getAllCities() {
    return this.cityRepository.find();
  }

  // create or update city here
  async createCity(name: string) {
    const city = new City();
    city.name = name;
    return this.cityRepository.save(city);
  }
}
