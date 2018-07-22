import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CourseViewModel, EnrollStudentModel } from '../../models/application.models';
import { StudentCoursesService } from '../services/student-courses.service';
import { NotificationService } from '../../shared/services/notification.service';


@Component({
  selector: 'app-course-search-card',
  templateUrl: './course-search-card.component.html',
  styleUrls: ['./course-search-card.component.scss']
})
export class CourseSearchCardComponent implements OnInit {

  @Input()
  public model: CourseViewModel;

  public password = '';
  public inputVisible = false;
  public isLoading = false;

  constructor(
    private _cmpService: StudentCoursesService,
    private _notService: NotificationService,
    private _router: Router) { }

  ngOnInit() {
  }

  onEnrollShow() {
    this.inputVisible = true;
    this.password = '';
  }
  onEnrollHide() {
    this.inputVisible = false;
  }

  onEnroll() {
    this.isLoading = true;
    this._cmpService
      .EnrollStudent(new EnrollStudentModel(this.model.id, this.password))
      .subscribe(_ => {
        this._notService.showSuccess('Te has matriculado con éxito');
        this._router.navigate(['../courses']);
      }, err => {
        this._notService.showError(err);
        this.isLoading = false;
      });
  }



}
