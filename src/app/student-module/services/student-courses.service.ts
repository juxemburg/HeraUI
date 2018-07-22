import { Injectable } from '@angular/core';
import { CourseViewModel, EnrollStudentModel } from '../../models/application.models';
import { HttpService } from '../../shared/services/http.service';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class StudentCoursesService {

  private _uri = 'Student/Courses';

  constructor(private _http: HttpService) { }

  public SearchCourses(searchString: string, skip: number, take: number): Observable<CourseViewModel[]> {

    const params = new Map<string, string>();
    params.set('searchString', searchString);
    params.set('skip', skip.toString());
    params.set('take', take.toString());

    return this._http.get('Course/GetCourses', params);
  }

  public EnrollStudent(model: EnrollStudentModel): Observable<boolean> {
    return this._http.post(`${this._uri}/EnrollStudent`, model);
  }
}
