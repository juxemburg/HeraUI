import { Component, OnInit } from '@angular/core';
import { NavbarPanelService } from '../navbar-panel/navbar-panel.service';
import { CourseManagerService } from './services/course-manager.service';

@Component({
  selector: 'app-teacher-courses',
  templateUrl: './teacher-courses.component.html',
  styleUrls: ['./teacher-courses.component.scss'],
  providers: [CourseManagerService]
})
export class TeacherCoursesComponent implements OnInit {

  constructor(
    private _panelService: NavbarPanelService,
    private _courseManager: CourseManagerService
  ) { }

  ngOnInit() {
    this._panelService.setTitle('Tus cursos');
  }

}
