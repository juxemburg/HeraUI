import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherCourseService } from '../teacher-course/teacher-course.service';
import { CourseStudentGradeModel } from '../../models/application.teacher.models';
import { delay } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'app-teacher-course-student-challenges',
  templateUrl: './teacher-course-student-challenges.component.html',
  styleUrls: ['./teacher-course-student-challenges.component.scss']
})
export class TeacherCourseStudentChallengesComponent implements OnInit {

  public model: CourseStudentGradeModel[];
  public isLoading = false;

  constructor(
    private _courseService: TeacherCourseService,
    private _route: ActivatedRoute,
    private _notService: NotificationService
  ) { }

  ngOnInit() {

    combineLatest(this._route.parent.params, this._route.params)
      .subscribe(([parentParams, params]) => {
        this.loadModel(+parentParams['courseId'], +params['studentId']);
      });
  }

  private loadModel(courseId: number, studentId: number) {
    this.isLoading = true;
    this._courseService.GetStudentChallenges(courseId, studentId)
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
