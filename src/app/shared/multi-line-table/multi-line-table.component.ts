import { Component, OnInit, Input } from '@angular/core';
import { MultiChartInfoModel } from 'app/models/common.models';

@Component({
  selector: 'app-multi-line-table',
  templateUrl: './multi-line-table.component.html',
  styleUrls: ['./multi-line-table.component.scss']
})
export class MultiLineTableComponent implements OnInit {

  @Input()
  public model: MultiChartInfoModel;

  @Input()
  public yaxis = '';

  constructor() { }

  ngOnInit() {
  }

}
