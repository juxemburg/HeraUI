import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from '../../shared/shared.module';
import { LoginLayoutComponent } from './layout/login-layout.component';
import { FormsModule } from '@angular/forms';
import { LoginCardComponent } from './login-card/login-card.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginCardComponent,
    LoginLayoutComponent,
    LoginCardComponent
  ]
})
export class LoginModule { }
