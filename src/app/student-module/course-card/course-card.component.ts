import { Component, OnInit, Input } from '@angular/core';
import { CourseViewModel } from 'app/models/application.models';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input()
  public model: CourseViewModel;

  constructor() { }

  ngOnInit() {
  }

}
