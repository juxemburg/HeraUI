import { Component, OnInit, Input } from '@angular/core';
import { NavbarPanelService } from './navbar-panel.service';
import { fadeInOutAnimation } from 'assets/animations/fade-in-out.animation';


@Component({
  selector: 'app-navbar-panel',
  templateUrl: './navbar-panel.component.html',
  styleUrls: ['./navbar-panel.component.scss'],
  animations: [fadeInOutAnimation]
})
export class NavbarPanelComponent implements OnInit {

  @Input()
  public dataColor = 'primary';

  public animationState = 'fadeIn';

  public title = '';
  constructor(private _cpmService: NavbarPanelService) { }

  ngOnInit() {
    this._cpmService.onTtitleChanged.subscribe(value => {
      this.title = value;
    });
  }

}
