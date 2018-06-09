import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
