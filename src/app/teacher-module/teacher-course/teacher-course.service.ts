import { Injectable } from '@angular/core';
import { HttpService } from '../../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherCourseService {

  private _uri = 'Teacher/Courses';

  constructor(private _http: HttpService) { }
}
