import { Component, OnInit, Input } from '@angular/core';
import { CourseListModel } from '../../models/application.models';
import { trigger, state, transition, style, animate } from '../../../../node_modules/@angular/animations';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  animations: [
    trigger('animationState', [
      state(':leave', style({ transform: 'translateY(0)', opacity: 1 }))
    ])
  ]
})
export class CourseCardComponent implements OnInit {

  @Input()
  public model: CourseListModel;

  public animationState = '';

  constructor() { }

  ngOnInit() {
  }

}
