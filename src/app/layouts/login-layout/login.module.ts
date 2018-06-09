import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LoginLayoutComponent } from './layout/login-layout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    LoginLayoutComponent
  ]
})
export class LoginModule { }
