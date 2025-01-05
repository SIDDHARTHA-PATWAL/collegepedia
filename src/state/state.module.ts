import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateService } from './state.service';
import { StateController } from './state.controller';
import { State } from './state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([State])], // Register State entity
  providers: [StateService],
  controllers: [StateController],
  exports: [StateService], // Export if needed in other modules
})
export class StateModule {}
