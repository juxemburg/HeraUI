import { Component, OnInit } from '@angular/core';
import { CourseListModel } from 'app/models/application.models';
import { NavbarPanelService } from 'app/shared/navbar-panel/navbar-panel.service';
import { StudentCoursesService } from '../services/student-courses.service';
import { NotificationService } from '../../shared/services/notification.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public modelList: CourseListModel[] = [];
  public isLoading = true;

  constructor(
    private _panelService: NavbarPanelService,
    private _courseServices: StudentCoursesService,
    private _notService: NotificationService) { }

  ngOnInit() {
    this._panelService.setTitle('Mis cursos');
    this.loadData();
  }

  private loadData() {
    this.isLoading = true;
    this._courseServices.GetMyCourses('', 0, 0)
      .subscribe(data => {
        this.modelList = data;
        this.isLoading = false;
      }, err => {
        this._notService.showError(err);
        this.isLoading = false;
      });
  }

}
