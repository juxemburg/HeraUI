import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCardComponent } from './login-card/login-card.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterSelectionComponent } from './register-selection/register-selection.component';
import { RegisterCardComponent } from './register-card/register-card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    LoginCardComponent,
    RegisterComponent,
    RegisterStudentComponent,
    RegisterTeacherComponent,
    RegisterSelectionComponent,
    RegisterCardComponent
  ],
  exports: [
    LoginComponent,
    LoginCardComponent,
    RegisterComponent,
    RegisterStudentComponent,
    RegisterTeacherComponent
  ],
  providers: []
})
export class AccountModule { }
