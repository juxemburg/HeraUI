import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './layout/login-layout.component';
import { LoginCardComponent } from '../../account-module/login-card/login-card.component';
import { NotFoundComponent } from 'app/shared/not-found/not-found.component';
import { RegisterSelectionComponent } from '../../account-module/register-selection/register-selection.component';
import { RegisterStudentComponent } from '../../account-module/register-student/register-student.component';
import { RegisterTeacherComponent } from '../../account-module/register-teacher/register-teacher.component';
import { RegisterCardComponent } from '../../account-module/register-card/register-card.component';


const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginCardComponent },
      {
        path: 'register',
        component: RegisterCardComponent,
        children: [
          { path: '', component: RegisterSelectionComponent },
          { path: 'student', component: RegisterStudentComponent },
          { path: 'teacher', component: RegisterTeacherComponent }
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
export class LoginRoutingModule { }
