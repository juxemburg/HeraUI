import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapService } from './services/bootstrap.service';
import { SharedModule } from '../shared/shared.module';

export function init_app(appLoadService: BootstrapService) {
  return () => appLoadService.initializeApp();
}


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  providers: [
    BootstrapService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [BootstrapService], multi: true }
  ]
})
export class BootstrapModule { }
