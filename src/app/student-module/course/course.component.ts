import { Component, OnInit, Input } from '@angular/core';
import { CourseViewModel } from 'app/models/application.models';
import { NavbarPanelService } from 'app/shared/navbar-panel/navbar-panel.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  public model: CourseViewModel;

  constructor(private _panelService: NavbarPanelService) { }

  ngOnInit() {
    this.model = new CourseViewModel(0, '', '', '', '', '', 0, '');
    this._panelService.setTitle(`Portales del curso: ${this.model.nombre}`);
  }

}
