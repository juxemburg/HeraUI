import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseListModel, CreateCourseModel } from 'app/models/application.models';
import { HttpService } from '../../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherCoursesService {

  private _uri = 'Teacher/Courses'

  constructor(private _http: HttpService) { }

  public GetCourses(
    searchString: string = '',
    skip: number = 0,
    take: number = 10): Observable<CourseListModel[]> {

    const params = new Map<string, string>();
    params.set('searchString', searchString);
    params.set('skip', skip.toString());
    params.set('take', take.toString());

    return this._http.get(`${this._uri}`, params);
  }

  public CreateCourse(model: CreateCourseModel): Observable<boolean> {
    return this._http.post('Course/AddCourse', model);
  }

}
