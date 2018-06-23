import { Component, OnInit } from '@angular/core';
import { CourseManagerService } from './services/course-manager.service';
import { NavbarPanelService } from 'app/shared/navbar-panel/navbar-panel.service';

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
