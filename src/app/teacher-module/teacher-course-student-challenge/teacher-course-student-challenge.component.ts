import { Component, OnInit, Input } from '@angular/core';
import { CourseStudentGradeModel } from '../../models/application.teacher.models';

@Component({
  selector: 'app-teacher-course-student-challenge',
  templateUrl: './teacher-course-student-challenge.component.html',
  styleUrls: ['./teacher-course-student-challenge.component.scss']
})
export class TeacherCourseStudentChallengeComponent implements OnInit {

  @Input()
  public model: CourseStudentGradeModel;

  public showGrades = false;
  public gradesButtonText = 'Ver intentos';
  public gradesButtonIcon = 'search';

  constructor() { }

  ngOnInit() {
  }

  public toggleGrades() {
    this.showGrades = !this.showGrades;
    this.gradesButtonText = (this.showGrades) ? 'Ocultar intentos' : 'Ver intentos';
    this.gradesButtonIcon = (this.showGrades) ? 'times' : 'search';
  }

}
