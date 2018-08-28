import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'assets/animations/fade.animation';


@Component({
  selector: 'app-regular-layout',
  templateUrl: './regular-layout.component.html',
  styleUrls: ['./regular-layout.component.scss'],
  animations: [fadeAnimation]
})
export class RegularLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
