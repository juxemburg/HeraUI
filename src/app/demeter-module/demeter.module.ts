import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallelCarsComponent } from './parallel-cars/parallel-cars.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ParallelCarsComponent
  ],
  exports: [
    ParallelCarsComponent
  ]
})
export class DemeterModule { }
