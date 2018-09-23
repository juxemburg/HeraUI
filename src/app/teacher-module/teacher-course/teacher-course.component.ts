import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarPanelService } from '../../shared/navbar-panel/navbar-panel.service';
import { TeacherCourseService } from './teacher-course.service';
import { NotificationService } from '../../shared/services/notification.service';
import { TeacherCourseModel } from '../../models/application.teacher.models';
import { CourseChallengeListService } from '../services/course-challenge-list.service';


@Component({
  selector: 'app-teacher-course',
  templateUrl: './teacher-course.component.html',
  styleUrls: ['./teacher-course.component.scss']
})
export class TeacherCourseComponent implements OnInit {

  public isLoading = true;
  public model: TeacherCourseModel;

  constructor(
    private _panelService: NavbarPanelService,
    private _courseService: TeacherCourseService,
    private _notService: NotificationService,
    private _route: ActivatedRoute,
    private _courseChallengesService: CourseChallengeListService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.loadModel(+params['courseId']);
    });
  }

  private loadModel(courseId: number) {
    this.isLoading = true;
    this._courseService.GetCourse(courseId)
      .subscribe(data => {
        this.model = data;
        this._courseChallengesService.model = this.model.desafios;
        this._panelService.setTitle(`Curso: ${this.model.nombreCurso}`);
        this.isLoading = false;
      }, err => {
        this._notService.showError(err);
        this.isLoading = false;
      });
  }

}
