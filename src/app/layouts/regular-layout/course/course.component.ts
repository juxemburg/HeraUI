import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'app/models/application.models';
import { NavbarPanelService } from '../../../components/navbar-panel/navbar-panel.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  public model: Course;

  constructor(private _panelService: NavbarPanelService) { }

  ngOnInit() {
    this.model = {
      id: 1,
      name: 'Scratch beginers',
      description: 'Curso de bloques condicionales en scratch'
    };
    this._panelService.setTitle(`Portales del curso: ${this.model.name}`);
  }

}
