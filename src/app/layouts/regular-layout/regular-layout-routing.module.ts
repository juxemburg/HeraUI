import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegularLayoutComponent } from './layout/regular-layout.component';
import { RegisterComponent } from './register/register.component';
import { RegisterProfesorComponent } from './register-profesor/register-profesor.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
    path: '',
    component: RegularLayoutComponent,
    children: [
      {
        path: 'account/register',
        component: RegisterComponent,
        children: [
          { path: 'teacher', component: RegisterTeacherComponent }
        ]
      },
      {
        path: 'student', children: [
          { path: 'courses', component: CoursesComponent },
          { path: 'course:/id', component: CourseComponent },
          { path: 'course', component: CourseComponent }
        ]
      },
      {path: '', redirectTo: 'student/course', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegularLayoutRoutingModule { }
