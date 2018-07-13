import { Component, OnInit } from '@angular/core';
import { TeacherCoursesService } from '../services/teacher-courses.service';
import { NotificationService } from '../../shared/services/notification.service';
import { CreateCourseModel } from '../../models/application.models';
import { ChallengeService } from '../services/challenge.service';

@Component({
  selector: 'app-create-course-form',
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.scss']
})
export class CreateCourseFormComponent implements OnInit {

  public model: CreateCourseModel;
  public isLoading = false;

  public searchType: any = ChallengeService;

  constructor(
    private _cmpService: TeacherCoursesService,
    private _notService: NotificationService) { }

  ngOnInit() {
    this.resetModel();
  }

  onFormSubmit() {
    this.createCourse();
  }

  private resetModel() {
    this.model = new CreateCourseModel('', '', '', '', 0);
  }

  private createCourse() {
    this.isLoading = true;
    this._cmpService.CreateCourse(this.model)
      .subscribe(_ => {
        this._notService.showSuccess('Curso creado exitosamente');
        this.isLoading = false;
      },
        err => {
          this._notService.showError(err);
          this.isLoading = false;
        });
  }

}
