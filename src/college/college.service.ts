// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { College } from './college.entity';

// @Injectable()
// export class CollegeService {
//   constructor(
//     @InjectRepository(College)
//     private collegeRepository: Repository<College>,
//   ) {}

//   async getColleges() {
//     return this.collegeRepository.find();
//   }

//   // Updated method
//   async getCollege(id: number) {
//     return this.collegeRepository.findOne({ where: { id } });
//   }
// }

// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { College } from './college.entity';

// @Injectable()
// export class CollegeService {
//   constructor(
//     @InjectRepository(College)
//     private readonly collegeRepository: Repository<College>,
//   ) {}

//   // Fetch all colleges
//   async getAllColleges(): Promise<College[]> {
//     return this.collegeRepository.find({ relations: ['city', 'state'] });
//   }

//   // Fetch a single college by ID
//   async getCollegeById(id: number): Promise<College> {
//     return this.collegeRepository.findOne({
//       where: { id },
//       relations: ['city', 'state', 'collegeWiseCourse', 'collegePlacements'],
//     });
//   }

//   // Create a new college
//   async createCollege(data: Partial<College>): Promise<College> {
//     const college = this.collegeRepository.create(data);
//     return this.collegeRepository.save(college);
//   }

//   // Update a college by ID
//   async updateCollege(id: number, data: Partial<College>): Promise<College> {
//     await this.collegeRepository.update(id, data);
//     return this.getCollegeById(id);
//   }

//   // Delete a college by ID
//   async deleteCollege(id: number): Promise<void> {
//     await this.collegeRepository.delete(id);
//   }
// }

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { College } from './college.entity';

@Injectable()
export class CollegeService {
  constructor(
    @InjectRepository(College)
    private readonly collegeRepository: Repository<College>,
  ) {}

  // Filter colleges by city or state
  async filterColleges(city: string, state: string) {
    let query = this.collegeRepository.createQueryBuilder('college');
    
    if (city) {
      query = query.andWhere('college.city = :city', { city });
    }
    if (state) {
      query = query.andWhere('college.state = :state', { state });
    }
    
    return query.getMany();
  }
}


