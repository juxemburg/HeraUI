import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegularLayoutRoutingModule } from './regular-layout-routing.module';
import { RegularLayoutComponent } from './layout/regular-layout.component';
import { RegisterComponent } from './register/register.component';
import { RegisterProfesorComponent } from './register-profesor/register-profesor.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RegularLayoutRoutingModule
  ],
  declarations: [RegularLayoutComponent, RegisterComponent, RegisterProfesorComponent, RegisterTeacherComponent, RegisterStudentComponent]
})
export class RegularLayoutModule { }
