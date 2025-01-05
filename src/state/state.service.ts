import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { State } from './state.entity';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>,
  ) {}

  // Fetch all states
  async getAllStates() {
    return this.stateRepository.find();
  }

  // Optionally, create or update state here
  async createState(name: string) {
    const state = new State();
    state.name = name;
    return this.stateRepository.save(state);
  }
}
