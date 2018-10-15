import { Component, OnInit } from '@angular/core';
import { StudentCourseDetailModel } from '../../models/application.models';
import { NavbarPanelService } from '../../shared/navbar-panel/navbar-panel.service';
import { StudentCoursesService } from '../services/student-courses.service';
import { ActivatedRoute } from '@angular/router';
import { fadeAnimation } from 'assets/animations/fade.animation';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  animations: [fadeAnimation]
})
export class CourseComponent implements OnInit {

  public model: StudentCourseDetailModel;
  public isLoading = true;

  public animationState = '';

  constructor(
    private _panelService: NavbarPanelService,
    private _courseService: StudentCoursesService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this._panelService.setTitle('');
    this._route.params.subscribe(params => {
      this.loadModel(+params['courseId']);
    });
  }

  private loadModel(courseId: number) {
    this.isLoading = true;
    this._courseService.GetCourse(courseId)
      .subscribe(data => {
        this.animationState = 'in';
        this.isLoading = false;
        this.model = data;
        this._panelService.setTitle(`Curso: ${this.model.nombre}`);
      });
  }

}
