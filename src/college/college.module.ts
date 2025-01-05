import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegeService } from './college.service';
import { CollegeController } from './college.controller';
import { College } from './college.entity';

@Module({
  imports: [TypeOrmModule.forFeature([College])], // Import TypeOrmModule and register College entity
  providers: [CollegeService], // Register CollegeService
  controllers: [CollegeController], // Register CollegeController
  exports: [CollegeService], // Export CollegeService 
})
export class CollegeModule {}
