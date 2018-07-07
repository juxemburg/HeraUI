import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherCoursesComponent } from 'app/teacher-module/teacher-courses/teacher-courses.component';
import { TeacherCoursesListComponent } from 'app/teacher-module/teacher-courses-list/teacher-courses-list.component';
import { TeacherCoursesSearchComponent } from 'app/teacher-module/teacher-courses-search/teacher-courses-search.component';
import { TeacherCoursesService } from './services/teacher-courses.service';
import { SharedModule } from '../shared/shared.module';
import { ChallengesComponent } from './challenges/challenges.component';
import { ChallengesListComponent } from './challenges-list/challenges-list.component';
import { ChallengesSearchComponent } from './challenges-search/challenges-search.component';
import { CreateChallengeComponent } from './create-challenge/create-challenge.component';
import { CreateChallengeFormComponent } from './create-challenge-form/create-challenge-form.component';

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
    CreateChallengeFormComponent
  ],
  exports: [
    TeacherCoursesComponent,
    TeacherCoursesListComponent,
    TeacherCoursesSearchComponent
  ],
  providers: [
    TeacherCoursesService
  ]
})
export class TeacherModule { }
