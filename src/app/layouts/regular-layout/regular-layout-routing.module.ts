import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegularLayoutComponent } from './layout/regular-layout.component';
import { RegisterComponent } from '../../account-module/register/register.component';
import { CoursesComponent } from '../../student-module/courses/courses.component';
import { RegisterTeacherComponent } from '../../account-module/register-teacher/register-teacher.component';
import { CourseComponent } from '../../student-module/course/course.component';
import { NotFoundComponent } from '../../shared/not-found/not-found.component';
import { IsAuthenticatedGuardService } from '../../shared/services/guards/is-authenticated-guard.service';
import { IsProfesorRoleGuardService } from '../../shared/services/guards/is-profesor-role-guard.service';



const routes: Routes = [
  {
    path: '',
    component: RegularLayoutComponent,
    canActivate: [IsAuthenticatedGuardService, IsProfesorRoleGuardService],
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
      { path: 'not-found', component: NotFoundComponent },
      { path: '**', redirectTo: 'not-found' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegularLayoutRoutingModule { }
