import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallelCarsComponent } from './parallel-cars/parallel-cars.component';
import { SharedModule } from '../shared/shared.module';
import { CloningTroubleComponent } from './cloning-trouble/cloning-trouble.component';
import { RepeatingRainsComponent } from './repeating-rains/repeating-rains.component';
import { AbandonedBlocksComponent } from './abandoned-blocks/abandoned-blocks.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ParallelCarsComponent,
    CloningTroubleComponent,
    RepeatingRainsComponent,
    AbandonedBlocksComponent
  ],
  exports: [
    ParallelCarsComponent,
    CloningTroubleComponent,
    RepeatingRainsComponent,
    AbandonedBlocksComponent
  ]
})
export class DemeterModule { }
