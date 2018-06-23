import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from 'app/student-module/course/course.component';
import { CourseCardComponent } from 'app/student-module/course-card/course-card.component';
import { CoursesComponent } from 'app/student-module/courses/courses.component';
import { PortalCardComponent } from 'app/student-module/portal-card/portal-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CourseComponent,
    CourseCardComponent,
    CoursesComponent,
    PortalCardComponent
  ],
  exports: [
    CourseComponent,
    CourseCardComponent,
    CoursesComponent,
    PortalCardComponent
  ]
})
export class StudentModule { }
