import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../../models/application.models';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input()
  public model: Course;

  constructor() { }

  ngOnInit() {
  }

}
