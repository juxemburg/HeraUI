import { Component, OnInit } from '@angular/core';
import { TeacherCourseStudentService } from '../teacher-course/teacher-course-student.service';
import { CourseStudentTracesModel } from 'app/models/application.teacher.models';
import { delay } from 'rxjs/operators';
import { NotificationService } from 'app/shared/services/notification.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-course-student-traces',
  templateUrl: './course-student-traces.component.html',
  styleUrls: ['./course-student-traces.component.scss']
})
export class CourseStudentTracesComponent implements OnInit {

  public model: CourseStudentTracesModel;
  public isLoading = true;

  constructor(
    private _mgrService: TeacherCourseStudentService,
    private _route: ActivatedRoute,
    private _notService: NotificationService) { }

  ngOnInit() {
    combineLatest(this._route.parent.params, this._route.params)
      .subscribe(([parentParams, params]) => {
        this.loadModel(+parentParams['courseId'], +params['studentId']);
      });
  }

  private loadModel(courseId: number, studentId: number) {
    this.isLoading = true;
    this._mgrService.GetStudentTraces(courseId, studentId)
      .pipe(delay(300))
      .subscribe(data => {
        this.isLoading = false;
        this.model = data;
      }, err => {
        this._notService.showError(err);
        this.isLoading = false;
      });
  }

}
