import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCardComponent } from './login-card/login-card.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { IsInRoleGuardService } from './services/guards/is-in-role-guard.service';
import { IsAuthenticatedGuardService } from './services/guards/is-authenticated-guard.service';
import { SharedModule } from '../shared/shared.module';

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
    RegisterTeacherComponent
  ],
  exports: [
    LoginComponent,
    LoginCardComponent,
    RegisterComponent,
    RegisterStudentComponent,
    RegisterTeacherComponent
  ],
  providers: [
    IsAuthenticatedGuardService,
    IsInRoleGuardService
  ]
})
export class AccountModule { }
