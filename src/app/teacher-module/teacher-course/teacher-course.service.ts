import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';
import { TeacherCourseModel, CourseStudentGradeModel, CourseChallengeModel } from '../../models/application.teacher.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherCourseService {

  private _uri = 'Teacher/Courses';

  constructor(private _http: HttpService) { }

  public GetCourse(courseId: number): Observable<TeacherCourseModel> {
    return this._http.get(`${this._uri}/${courseId}`);
  }

  public GetStudentChallenges(courseId: number, studentId: number): Observable<CourseStudentGradeModel[]> {
    return this._http.get(`${this._uri}/${courseId}/Student/${studentId}/Grades`);
  }

  public AddChallenge(courseId: number, challengeId: number): Observable<CourseChallengeModel> {
    return this._http.post(`${this._uri}/${courseId}/Challenge/${challengeId}`);
  }

  public SortChallenges(courseId: number, challenges: number[]): Observable<boolean> {
    return this._http.post(`${this._uri}/${courseId}/SortChallenges`, challenges);
  }
}
