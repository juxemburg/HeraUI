import { Component, OnInit } from '@angular/core';
import { Course } from 'app/models/application.models';
import { NavbarPanelService } from 'app/shared/navbar-panel/navbar-panel.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public modelList: Course[] = [];

  constructor(private _panelService: NavbarPanelService) { }

  ngOnInit() {
    this._panelService.setTitle('Mis cursos');
    this.modelList = [
      {
        id: 1,
        name: 'Scratch beginers',
        description: 'Curso de bloques condicionales en scratch'
      }
    ];
  }

}
