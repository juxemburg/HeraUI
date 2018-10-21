import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherCourseService } from '../teacher-course/teacher-course.service';
import { CourseStudentGradeModel, CourseChallengeModel } from '../../models/application.teacher.models';
import { delay } from 'rxjs/operators';
import { combineLatest, zip, Observable, forkJoin, Subject } from 'rxjs';
import { NotificationService } from '../../shared/services/notification.service';
import { TeacherCourseStudentService } from '../teacher-course/teacher-course-student.service';

@Component({
  selector: 'app-teacher-course-student-challenges',
  templateUrl: './teacher-course-student-challenges.component.html',
  styleUrls: ['./teacher-course-student-challenges.component.scss']
})
export class TeacherCourseStudentChallengesComponent implements OnInit {

  public model: CourseStudentGradeModel[];
  public isLoading = false;
  public nextChallengeId: number;
  public nextChallenge: CourseChallengeModel;

  private _courseId: number;
  private _studentId: number;

  private _isSettingChallengeSource = new Subject<boolean>();
  public isSettingChallenge$ = this._isSettingChallengeSource.asObservable();

  private _challenges$: Observable<CourseStudentGradeModel[]>;
  private _nextChallenge$: Observable<CourseChallengeModel>;

  constructor(
    private _courseService: TeacherCourseService,
    private _courseStudentService: TeacherCourseStudentService,
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
    this._courseId = courseId;
    this._studentId = studentId;
    this.isLoading = true;

    this._challenges$ = this._courseService.GetStudentChallenges(courseId, studentId)
      .pipe(delay(300));

    this._challenges$.subscribe(data => this.model = data, err => {
      this._notService.showError(err);
      this.isLoading = false;
    })

    this._nextChallenge$ = this._courseStudentService.GetStudentNextChallenge(courseId, studentId)
      .pipe(delay(300));

    this._nextChallenge$.subscribe(data => this.nextChallenge = data,
      err => {
        this._notService.showError(err);
        this.isLoading = false;
      });

    forkJoin(this._challenges$, this._nextChallenge$)
      .subscribe(_ => this.isLoading = false);
  }

  public setNextChallenge() {
    this._isSettingChallengeSource.next(true);
    this._courseStudentService.PostStudentNextChallenge(this._courseId, this._studentId, this.nextChallengeId)
    .pipe(delay(200))
    .subscribe(challenge => {
      this.nextChallenge = challenge;
      this._isSettingChallengeSource.next(false);
    }, err => {
      this._notService.showError(err);
      this._isSettingChallengeSource.next(false);
    });
  }



}
