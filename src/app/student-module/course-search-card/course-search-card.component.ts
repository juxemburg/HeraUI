import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CourseListModel, EnrollStudentModel } from '../../models/application.models';
import { StudentCoursesService } from '../services/student-courses.service';
import { NotificationService } from '../../shared/services/notification.service';
import { fadeInOutAnimation } from 'assets/animations/fade-in-out.animation';


@Component({
  selector: 'app-course-search-card',
  templateUrl: './course-search-card.component.html',
  styleUrls: ['./course-search-card.component.scss'],
  animations: [fadeInOutAnimation]
})
export class CourseSearchCardComponent implements OnInit {

  @Input()
  public model: CourseListModel;

  public animationState = 'fade-in';

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
    this.animationState = 'fade-out';
    setTimeout(() => {
      this.inputVisible = true;
      this.password = '';
      this.animationState = 'fade-in';
    }, 300);
  }
  onEnrollHide() {
    this.animationState = 'fade-out';
    setTimeout(() => {
      this.inputVisible = false;
      this.password = '';
      this.animationState = 'fade-in';
    }, 300);
  }

  onEnroll() {
    this.isLoading = true;
    this._cmpService
      .EnrollStudent(new EnrollStudentModel(this.model.id, this.password))
      .subscribe(_ => {
        this._notService.showSuccess('Te has matriculado con éxito');
        this._router.navigate(['/student/course/', this.model.id]);
      }, err => {
        this._notService.showError(err);
        this.isLoading = false;
      });
  }



}
