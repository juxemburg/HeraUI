import { Injectable, EventEmitter } from '@angular/core';
import { StudentChallengeService } from '../services/student-challenge.service';
import { CalificacionesDesafioModel, CalificacionInfoModel } from '../../models/application.student.models';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NotificationService } from '../../shared/services/notification.service';
import { Tuple } from 'app/shared/models/shared.models';


@Injectable({
  providedIn: 'root'
})
export class CourseChallengeManagerService {

  private _model: CalificacionesDesafioModel;
  public set model(val: CalificacionesDesafioModel) {
    this._model = val;
    this.onModelChangedSource.next(this._model);
    this.onIsLoading.emit(false);
  }

  public get model(): CalificacionesDesafioModel {
    return this._model;
  }

  private onModelChangedSource = new Subject<CalificacionesDesafioModel>();
  public onModelChanged$ = this.onModelChangedSource.asObservable();

  public onIsLoading = new EventEmitter<boolean>();

  constructor(
    private _studentChallengeService: StudentChallengeService,
    private _notService: NotificationService) { }


  public LoadModel(courseId: number, challengeId: number) {
    this.loadModel(courseId, challengeId);
  }

  private loadModel(courseId: number, challengeId: number) {
    this.onIsLoading.emit(true);
    this._studentChallengeService.GetModel(courseId, challengeId)
      .subscribe(data => this.model = data, err => {
        this._notService.showError(err);
        this.onIsLoading.emit(false);
      })
  }

  public GetStudentMetadata(): Observable<Tuple<number, string>[]> {
    return this._studentChallengeService
      .GetStudentListMetadata(this.model.cursoId, this.model.estudianteId);
  }

  public CreateRecord(): Observable<CalificacionInfoModel> {
    if (!this._model) { return null; }

    return this._studentChallengeService
      .CreateRecord(this._model.cursoId, this._model.desafioId)
      .pipe(
        tap(_ =>
          this.loadModel(this._model.cursoId, this._model.desafioId),
          err => {
            this._notService.showError(err)
            this.onIsLoading.emit(false);
          })
      );
  }

  public StartRecord(noteId: number, colabs: number[]): Observable<CalificacionInfoModel> {
    if (!this._model) { return null; }

    return this._studentChallengeService
      .StartRecord(this._model.cursoId, this._model.desafioId, noteId, colabs)
      .pipe(
        tap(_ =>
          this.loadModel(this._model.cursoId, this._model.desafioId),
          err => {
            this._notService.showError(err)
            this.onIsLoading.emit(false);
          })
      );
  }

  public EndRecord(noteId: number, projId: string): Observable<CalificacionInfoModel> {
    if (!this._model) { return null; }

    return this._studentChallengeService
      .EndRecord(this._model.cursoId, this._model.desafioId, noteId, projId)
      .pipe(
        tap(_ =>
          this.loadModel(this._model.cursoId, this._model.desafioId),
          err => {
            this._notService.showError(err)
            this.onIsLoading.emit(false);
          })
      );
  }
}
