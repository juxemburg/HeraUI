import { Injectable, EventEmitter } from '@angular/core';
import { TeacherCoursesService } from '../../services/teacher-courses.service';
import { Course } from 'app/models/application.models';

@Injectable({
  providedIn: 'root'
})
export class CourseManagerService {

  private model: Course[] = [];

  public onModelChanged = new EventEmitter<Course[]>();

  constructor(private _coursesService: TeacherCoursesService) { }

  public SearchCourse(searchString: string) {
    this._coursesService.GetCourses(searchString)
      .subscribe(data => {
        this.model = data;
        this.onModelChanged.emit(this.model);
      },
        err => {
          // Notify error
        });
  }
}
