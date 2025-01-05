import { Module } from '@nestjs/common';
import { CollegeModule } from './college/college.module';
import { CityModule } from './city/city.module';
import { StateModule } from './state/state.module';
import { CollegePlacementModule } from './college-placement/college-placement.module';
import { CollegeWiseCourseModule } from './college-wise-course/college-wise-course.module';
import { AppConfigModule } from './config/config.module'; // Make sure the config module is correctly imported
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { College } from './college/college.entity';
import { State } from './state/state.entity';
import { City } from './city/city.entity';
import { CollegePlacement } from './college-placement/college-placement.entity';
import { CollegeWiseCourse } from './college-wise-course/college-wise-course.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT') || 5432,
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        ssl: {
          rejectUnauthorized: false, 
        },
        entities: [College,State,City,CollegePlacement,CollegeWiseCourse],
        synchronize: false, // or false in production
      }),
    }),
    
    CollegeModule,
    CityModule,
    StateModule,
    CollegePlacementModule,
    CollegeWiseCourseModule,
    AppConfigModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
