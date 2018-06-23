import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherCoursesComponent } from 'app/teacher-module/teacher-courses/teacher-courses.component';
import { TeacherCoursesListComponent } from 'app/teacher-module/teacher-courses-list/teacher-courses-list.component';
import { TeacherCoursesSearchComponent } from 'app/teacher-module/teacher-courses-search/teacher-courses-search.component';
import { TeacherCoursesService } from './services/teacher-courses.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TeacherCoursesComponent,
    TeacherCoursesListComponent,
    TeacherCoursesSearchComponent
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
