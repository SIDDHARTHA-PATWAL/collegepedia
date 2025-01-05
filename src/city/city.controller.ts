import { Controller, Get, Post, Body } from '@nestjs/common';
import { CityService } from './city.service';

@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  // Endpoint: /cities (Get all cities)
  @Get()
  async getCities() {
    return this.cityService.getAllCities();
  }

  // Endpoint: /cities (Create a new city)
  @Post()
  async createCity(@Body('name') name: string) {
    return this.cityService.createCity(name);
  }
}

