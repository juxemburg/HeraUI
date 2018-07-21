import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from 'app/student-module/course/course.component';
import { CourseCardComponent } from 'app/student-module/course-card/course-card.component';
import { CoursesComponent } from 'app/student-module/courses/courses.component';
import { PortalCardComponent } from 'app/student-module/portal-card/portal-card.component';
import { SharedModule } from '../shared/shared.module';
import { CoursesSearchComponent } from './courses-search/courses-search.component';
import { CourseSearchCardComponent } from './course-search-card/course-search-card.component';
import { CourseSearchListComponent } from './course-search-list/course-search-list.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CourseComponent,
    CourseCardComponent,
    CoursesComponent,
    PortalCardComponent,
    CoursesSearchComponent,
    CourseSearchCardComponent,
    CourseSearchListComponent
  ],
  exports: [
    CourseComponent,
    CourseCardComponent,
    CoursesComponent,
    PortalCardComponent
  ]
})
export class StudentModule { }
