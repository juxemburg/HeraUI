import { Component, OnInit } from '@angular/core';
import { CourseListModel } from '../../models/application.models';
import { NavbarPanelService } from '../../shared/navbar-panel/navbar-panel.service';
import { StudentCoursesService } from '../services/student-courses.service';
import { NotificationService } from '../../shared/services/notification.service';
import { trigger, state, transition, animate, style, query, stagger } from '@angular/animations';
import { listAnimation } from 'assets/animations/list-fade-in.animation';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  animations: [listAnimation]
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
