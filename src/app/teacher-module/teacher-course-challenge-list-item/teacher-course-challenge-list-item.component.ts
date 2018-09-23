import { Component, OnInit, Input } from '@angular/core';
import { CourseChallengeModel } from '../../models/application.teacher.models';

@Component({
  selector: 'app-teacher-course-challenge-list-item',
  templateUrl: './teacher-course-challenge-list-item.component.html',
  styleUrls: ['./teacher-course-challenge-list-item.component.scss']
})
export class TeacherCourseChallengeListItemComponent implements OnInit {

  @Input()
  public model: CourseChallengeModel;

  constructor() { }

  ngOnInit() {
  }

}
