import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LoginLayoutComponent } from './layout/login-layout.component';
import { AccountModule } from '../../account-module/account.module';

@NgModule({
  imports: [
    CommonModule,
    AccountModule,
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginLayoutComponent
  ]
})
export class LoginModule { }
