import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseStudentTracesModel } from 'app/models/application.teacher.models';
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
}
