import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { HttpErrorService } from './services/http-error.service';
import { NotificationService } from './services/notification.service';
import { RequiredInputComponent } from './required-input/required-input.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    RequiredInputComponent,
    LoadingComponent
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    RequiredInputComponent,
    LoadingComponent
  ],
  providers: [
    HttpService,
    HttpErrorService,
    NotificationService
  ]
})
export class SharedModule { }
