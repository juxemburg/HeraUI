import { Component, OnInit, Input } from '@angular/core';
import { ScratchGeneralResult, ScratchSpriteResult } from '../models/hera.models';

@Component({
  selector: 'app-scratch-results',
  templateUrl: './scratch-results.component.html',
  styleUrls: ['./scratch-results.component.scss']
})
export class ScratchResultsComponent implements OnInit {

  @Input()
  public generalResult: ScratchGeneralResult;

  @Input()
  public spriteResults: ScratchSpriteResult[];

  constructor() { }

  ngOnInit() {
  }

}
