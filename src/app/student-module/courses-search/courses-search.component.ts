import { Component, OnInit } from '@angular/core';
import { NavbarPanelService } from '../../shared/navbar-panel/navbar-panel.service';
import { StudentCoursesSearchManagerService } from './student-courses-search-manager.service';
import { CourseListModel } from '../../models/application.models';
import { fadeAnimation } from 'assets/animations/fade.animation';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss'],
  providers: [StudentCoursesSearchManagerService],
  animations: [fadeAnimation]
})
export class CoursesSearchComponent implements OnInit {

  public animationState = '';

  constructor(
    private _panelService: NavbarPanelService,
    private _mgrService: StudentCoursesSearchManagerService) { }

  ngOnInit() {
    this.animationState = 'in';
    this._panelService.setTitle('Buscar cursos');
    this._mgrService.SearchCourses();
  }

}
