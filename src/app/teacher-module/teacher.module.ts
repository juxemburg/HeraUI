import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherCoursesComponent } from './teacher-courses/teacher-courses.component';
import { TeacherCoursesListComponent } from './teacher-courses-list/teacher-courses-list.component';
import { TeacherCoursesSearchComponent } from './teacher-courses-search/teacher-courses-search.component';
import { TeacherCoursesService } from './services/teacher-courses.service';
import { SharedModule } from '../shared/shared.module';
import { ChallengesComponent } from './challenges/challenges.component';
import { ChallengesListComponent } from './challenges-list/challenges-list.component';
import { ChallengesSearchComponent } from './challenges-search/challenges-search.component';
import { CreateChallengeComponent } from './create-challenge/create-challenge.component';
import { CreateChallengeFormComponent } from './create-challenge-form/create-challenge-form.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CreateCourseFormComponent } from './create-course-form/create-course-form.component';
import { ChallengeService } from './services/challenge.service';
import { ChallengeSelectorComponent } from './challenge-selector/challenge-selector.component';
import { TeacherCourseComponent } from './teacher-course/teacher-course.component';
import { TeacherCourseStudentListComponent } from './teacher-course-student-list/teacher-course-student-list.component';
import { TeacherCourseStudentChallengesComponent } from './teacher-course-student-challenges/teacher-course-student-challenges.component';
import { TeacherCourseStudentChallengeComponent } from './teacher-course-student-challenge/teacher-course-student-challenge.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TeacherCoursesComponent,
    TeacherCoursesListComponent,
    TeacherCoursesSearchComponent,
    ChallengesComponent,
    ChallengesListComponent,
    ChallengesSearchComponent,
    CreateChallengeComponent,
    CreateChallengeFormComponent,
    CreateCourseComponent,
    CreateCourseFormComponent,
    ChallengeSelectorComponent,
    TeacherCourseComponent,
    TeacherCourseStudentListComponent,
    TeacherCourseStudentChallengesComponent,
    TeacherCourseStudentChallengeComponent
  ],
  exports: [
    TeacherCoursesComponent,
    TeacherCoursesListComponent,
    TeacherCoursesSearchComponent
  ],
  providers: [
    TeacherCoursesService,
    ChallengeService
  ]
})
export class TeacherModule { }
