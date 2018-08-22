import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScratchResultsComponent } from './scratch-results/scratch-results.component';
import { GeneralInfoResultsComponent } from './general-info-results/general-info-results.component';
import { SpriteInfoResultsComponent } from './sprite-info-results/sprite-info-results.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ScratchResultsComponent,
    GeneralInfoResultsComponent,
    SpriteInfoResultsComponent
  ],
  exports: [
    ScratchResultsComponent,
    GeneralInfoResultsComponent,
    SpriteInfoResultsComponent
  ]
})
export class HeraModule { }
