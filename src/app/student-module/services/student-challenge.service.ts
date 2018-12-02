import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { Observable } from 'rxjs';
import {
  CalificacionesDesafioModel,
  CalificacionInfoModel,
  CalificacionResultadoModel,
  EstudianteDesafioResultadoViewModel
} from '../../models/application.student.models';
import { Tuple } from 'app/shared/models/shared.models';

@Injectable({
  providedIn: 'root'
})
export class StudentChallengeService {
  private _uri = 'Student/Course';
  private uri(courseId: number, challengeId: number): string {
    return `${this._uri}/${courseId}/Challenge/${challengeId}`;
  }

  constructor(private _http: HttpService) {}

  public GetModel(
    courseId: number,
    challengeId: number
  ): Observable<CalificacionesDesafioModel> {
    return this._http.get(`${this.uri(courseId, challengeId)}/Get`);
  }

  public CreateRecord(
    courseId: number,
    challengeId: number
  ): Observable<CalificacionInfoModel> {
    return this._http.post<any, CalificacionInfoModel>(
      `${this.uri(courseId, challengeId)}/CreateRecord`
    );
  }

  public StartRecord(
    courseId: number,
    challengeId: number,
    noteId: number,
    colabs: number[]
  ): Observable<CalificacionInfoModel> {
    return this._http.post<any, CalificacionInfoModel>(
      `${this.uri(courseId, challengeId)}/Start/${noteId}`,
      colabs
    );
  }

  public EndRecord(
    courseId: number,
    challengeId: number,
    noteId: number,
    projId: string
  ): Observable<CalificacionInfoModel> {
    return this._http.post<any, CalificacionInfoModel>(
      `${this.uri(courseId, challengeId)}/End/${noteId}?projId=${projId}`
    );
  }

  public GetResult(
    courseId: number,
    challengeId: number,
    noteId: number
  ): Observable<CalificacionResultadoModel> {
    return this._http.get<CalificacionResultadoModel>(
      `${this.uri(courseId, challengeId)}/GetResults/${noteId}`
    );
  }

  public GetPeerResult(
    courseId: number,
    challengeId: number
  ): Observable<EstudianteDesafioResultadoViewModel[]> {
    return this._http.get(`${this.uri(courseId, challengeId)}/GetPeersResults`);
  }

  public GetStudentListMetadata(courseId: number, challengeId: number) {
    return this._http.get<Tuple<number, string>[]>(
      `${this.uri(courseId, challengeId)}/GetStudents`
    );
  }
}
