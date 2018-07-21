import { Injectable, EventEmitter } from '@angular/core';
import { CourseViewModel } from '../../models/application.models';
import { StudentCoursesService } from '../services/student-courses.service';
import { NotificationService } from '../../shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class StudentCoursesSearchManagerService {

  private _model: CourseViewModel[];
  private set model(value: CourseViewModel[]) {
    this._model = value;
    this.onModelChanged.emit(this._model);
  }

  public onLoading = new EventEmitter<boolean>();
  public onModelChanged = new EventEmitter<CourseViewModel[]>();

  constructor(
    private _courseService: StudentCoursesService,
    private _notService: NotificationService) { }

  public SearchCourses(searchString: string = '') {
    this.onLoading.emit(true);
    this._courseService.SearchCourses(searchString, 0, 0)
      .subscribe(data => {
        this.model = data;
        this.onLoading.emit(false);
      },
        err => {
          this._notService.showError(err);
          this.onLoading.emit(false);
        });
  }
}
