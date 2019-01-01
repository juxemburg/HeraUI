import { Component, OnInit, Input } from '@angular/core';
import { AddStudentValorationViewModel } from 'app/models/application.teacher.models';
import { TeacherCourseService } from '../teacher-course/teacher-course.service';
import { Subject } from 'rxjs';
import { NotificationService } from 'app/shared/services/notification.service';

@Component({
  selector: 'app-teacher-course-student-valoration',
  templateUrl: './teacher-course-student-valoration.component.html',
  styleUrls: ['./teacher-course-student-valoration.component.scss']
})
export class TeacherCourseStudentValorationComponent implements OnInit {
  @Input() courseId: number;
  @Input() studentId: number;
  @Input() challengeId: number;
  @Input() calificacionId = 0;

  private _onSubmittingSource = new Subject<boolean>();
  public onSubmitting$ = this._onSubmittingSource.asObservable();

  public model = new AddStudentValorationViewModel(0, 0, false, '', 1);

  constructor(
    private _cmpService: TeacherCourseService,
    private _notService: NotificationService
  ) {}

  ngOnInit() {
    this.model = new AddStudentValorationViewModel(this.calificacionId, 0, false, '', 1);
  }

  formSubmit() {
    this._onSubmittingSource.next(true);
    this._cmpService
      .AddStudentValoration(
        this.courseId,
        this.studentId,
        this.challengeId,
        this.model
      )
      .subscribe(
        _ => {
          this._notService.showSuccess('Datos registrados');
          this._onSubmittingSource.next(false);
        },
        err => {
          this._notService.showError('Erorr al registrar la información');
          this._onSubmittingSource.next(false);
        }
      );
  }
}
