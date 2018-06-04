import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { HttpErrorService } from './services/http-error.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [HttpService, HttpErrorService]
})
export class SharedModule { }
