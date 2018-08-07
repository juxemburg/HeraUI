import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { Observable } from '../../../../node_modules/rxjs';
import { CalificacionesDesafioModel, CalificacionInfoModel } from '../../models/application.student.models';

@Injectable({
  providedIn: 'root'
})
export class StudentChallengeService {

  private _uri = 'Student/Course'
  private uri(courseId: number, challengeId: number): string {
    return `${this._uri}/${courseId}/Challenge/${challengeId}`;
  }

  constructor(private _http: HttpService) { }

  public GetModel(courseId: number, challengeId: number)
    : Observable<CalificacionesDesafioModel> {
    return this._http
      .get(`${this.uri(courseId, challengeId)}/Get`);
  }

  public CreateRecord(courseId: number, challengeId: number)
    : Observable<CalificacionInfoModel> {
    return this._http.post<any, CalificacionInfoModel>(
      `${this.uri(courseId, challengeId)}/CreateRecord`
    );
  }

  public StartRecord(courseId: number, challengeId: number,
    noteId: number): Observable<CalificacionInfoModel> {
    return this._http.post<any, CalificacionInfoModel>(
      `${this.uri(courseId, challengeId)}/Start/${noteId}`
    );
  }

  public EndRecord(courseId: number, challengeId: number,
    noteId: number, projId: string): Observable<CalificacionInfoModel> {
    return this._http.post<any, CalificacionInfoModel>(
      `${this.uri(courseId, challengeId)}/End/${noteId}?projId=${projId}`
    );
  }

}
