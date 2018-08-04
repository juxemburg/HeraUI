import { Injectable, EventEmitter } from '@angular/core';
import { TeacherCoursesService } from '../../services/teacher-courses.service';
import { CourseListModel } from 'app/models/application.models';
import { NotificationService } from '../../../shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class CourseManagerService {

  private model: CourseListModel[] = [];

  public onModelChanged = new EventEmitter<CourseListModel[]>();
  public onLoading = new EventEmitter<boolean>();

  constructor(
    private _coursesService: TeacherCoursesService,
    private _notService: NotificationService) { }

  public SearchCourse(searchString: string) {
    this.onLoading.emit(true);
    this._coursesService.GetCourses(searchString)
      .subscribe(data => {
        this.model = data;
        this.onModelChanged.emit(this.model);
        this.onLoading.emit(false);
      },
        err => {
          this._notService.showError(err);
          this.onLoading.emit(false);
        });
  }
}
