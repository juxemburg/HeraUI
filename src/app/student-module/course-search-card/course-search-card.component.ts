import { Component, OnInit, Input } from '@angular/core';
import { CourseViewModel } from '../../models/application.models';

@Component({
  selector: 'app-course-search-card',
  templateUrl: './course-search-card.component.html',
  styleUrls: ['./course-search-card.component.scss']
})
export class CourseSearchCardComponent implements OnInit {

  @Input()
  public model: CourseViewModel;

  constructor() { }

  ngOnInit() {
  }

}
