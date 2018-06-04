import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    SharedModule
  ],
  declarations: [LoginComponent, LoginLayoutComponent, DashboardLayoutComponent],
  providers: [LoginService]
})
export class ApplicationContextModule { }
