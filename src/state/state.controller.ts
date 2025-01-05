import { Controller, Get, Post, Body } from '@nestjs/common';
import { StateService } from './state.service';

@Controller('states')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  // Endpoint: /states (Get all states)
  @Get()
  async getStates() {
    return this.stateService.getAllStates();
  }

  // Endpoint: /states (Create a new state)
  @Post()
  async createState(@Body('name') name: string) {
    return this.stateService.createState(name);
  }
}

