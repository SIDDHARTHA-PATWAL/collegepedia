import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegePlacementService } from './college-placement.service';
import { CollegePlacementController } from './college-placement.controller';
import { CollegePlacement } from './college-placement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CollegePlacement])], 
  providers: [CollegePlacementService],
  controllers: [CollegePlacementController],
  exports: [CollegePlacementService], 
})
export class CollegePlacementModule {}
