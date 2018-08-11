import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallelCarsComponent } from './parallel-cars/parallel-cars.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ParallelCarsComponent
  ],
  exports: [
    ParallelCarsComponent
  ]
})
export class DemeterModule { }
