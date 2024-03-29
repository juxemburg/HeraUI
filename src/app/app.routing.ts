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
    path: 'account',
    loadChildren: 'app/layouts/login-layout/login.module#LoginModule'
  },
  {
    path: '',
    loadChildren: 'app/layouts/regular-layout/regular-layout.module#RegularLayoutModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
