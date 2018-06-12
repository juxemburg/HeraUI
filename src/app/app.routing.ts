import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: 'app/layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  },
  {
    path: '',
    loadChildren: 'app/layouts/regular-layout/regular-layout.module#RegularLayoutModule'
  },
  {
    path: 'login',
    loadChildren: 'app/layouts/login-layout/login.module#LoginModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
