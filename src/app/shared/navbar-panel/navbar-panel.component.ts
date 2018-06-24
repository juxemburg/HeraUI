import { Component, OnInit, Input } from '@angular/core';
import { NavbarPanelService } from 'app/shared/navbar-panel/navbar-panel.service';


@Component({
  selector: 'app-navbar-panel',
  templateUrl: './navbar-panel.component.html',
  styleUrls: ['./navbar-panel.component.scss']
})
export class NavbarPanelComponent implements OnInit {

  @Input()
  public dataColor = 'primary';

  public title = '';
  constructor(private _cpmService: NavbarPanelService) { }

  ngOnInit() {
    this._cpmService.onTtitleChanged.subscribe(value => this.title = value);
  }

}
