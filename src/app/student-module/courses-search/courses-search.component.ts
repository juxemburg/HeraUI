import { Component, OnInit } from '@angular/core';
import { NavbarPanelService } from 'app/shared/navbar-panel/navbar-panel.service';
import { StudentCoursesSearchManagerService } from './student-courses-search-manager.service';
import { CourseViewModel } from '../../models/application.models';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss'],
  providers: [StudentCoursesSearchManagerService]
})
export class CoursesSearchComponent implements OnInit {

  constructor(
    private _panelService: NavbarPanelService,
    private _mgrService: StudentCoursesSearchManagerService) { }

  ngOnInit() {
    this._panelService.setTitle('Buscar cursos');
    this._mgrService.SearchCourses();
  }

}
