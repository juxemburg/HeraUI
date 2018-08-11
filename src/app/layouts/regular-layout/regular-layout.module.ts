import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegularLayoutRoutingModule } from './regular-layout-routing.module';
import { RegularLayoutComponent } from './layout/regular-layout.component';
import { SharedModule } from '../../shared/shared.module';
import { AccountModule } from '../../account-module/account.module';
import { StudentModule } from '../../student-module/student.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AccountModule,
    StudentModule,
    RegularLayoutRoutingModule
  ],
  declarations: [
    RegularLayoutComponent
  ]
})
export class RegularLayoutModule { }
