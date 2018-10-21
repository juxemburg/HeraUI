import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseStudentTracesModel, CourseChallengeModel } from 'app/models/application.teacher.models';
import { HttpService } from 'app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherCourseStudentService {

  private _uri = 'Teacher/Course';

  constructor(private _http: HttpService) { }

  public GetStudentTraces(courseId: number, studentId: number): Observable<CourseStudentTracesModel> {
    return this._http.get(`${this._uri}/${courseId}/Student/${studentId}/Traces`);
  }

  public GetStudentNextChallenge(courseId: number, studentId: number): Observable<CourseChallengeModel> {
    return this._http.get(`${this._uri}/${courseId}/Student/${studentId}/NextChallenge`);
  }

  public PostStudentNextChallenge(courseId: number, studentId: number, challengeId: number): Observable<any> {
    return this._http.post(`${this._uri}/${courseId}/Student/${studentId}/NextChallenge/${challengeId}`);
  }

}
