import { Component, OnInit, Input } from '@angular/core';
import { ScratchGeneralInfo } from '../models/hera.models';

@Component({
  selector: 'app-general-info-results',
  templateUrl: './general-info-results.component.html',
  styleUrls: ['./general-info-results.component.scss']
})
export class GeneralInfoResultsComponent implements OnInit {

  @Input()
  public model: ScratchGeneralInfo;

  constructor() { }

  ngOnInit() {
  }

}
