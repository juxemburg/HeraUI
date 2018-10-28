import { Injectable, EventEmitter } from '@angular/core';
import { CourseChallengeModel } from '../../models/application.teacher.models';
import { Subject } from 'rxjs';
import { delay, throttleTime } from 'rxjs/operators';
import { TeacherCourseService } from '../teacher-course/teacher-course.service';
import { NotificationService } from '../../shared/services/notification.service';


@Injectable({
  providedIn: 'root'
})
export class CourseChallengeListService {

  private _onModelChangedSource = new Subject<CourseChallengeModel[]>();
  public onModelChanged$ = this._onModelChangedSource.asObservable();

  public onIsLoading = new EventEmitter<boolean>();

  private _model: CourseChallengeModel[] = [];

  public get model(): CourseChallengeModel[] {
    return this._model;
  }

  public set model(value: CourseChallengeModel[]) {
    this._model = value;
    this._onModelChangedSource.next(this.model);
  }

  constructor(
    private _teacherCourseService: TeacherCourseService,
    private _notificationService: NotificationService) { }

  public AddChallenge(courseId: number, challengeId: number) {
    this.onIsLoading.emit(true);
    this._teacherCourseService.AddChallenge(courseId, challengeId)
      .pipe(delay(1000))
      .subscribe(val => {
        this.model.push(val);
        this._notificationService.showSuccess('Desafío agregado exitosamente');
        this.onIsLoading.emit(false);
      }, err => {
        this._notificationService.showError(`Error: ${err.Message}`);
        this.onIsLoading.emit(false);
      });
  }

  public sortChallenges(courseId: number, challenges: number[]) {
    this._teacherCourseService.SortChallenges(courseId, challenges)
      .subscribe(
        res => this._notificationService.showSuccess('Cambios actualizados'),
        err => {
          this._notificationService.showError('Error al guardar los cambios');
          this._notificationService.showError(err);
          this._onModelChangedSource.next(this.model);
        });
  }

}
