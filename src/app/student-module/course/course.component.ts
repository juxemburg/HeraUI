import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CourseListModel, StudentCourseDetailModel } from 'app/models/application.models';
import { NavbarPanelService } from 'app/shared/navbar-panel/navbar-panel.service';
import { StudentCoursesService } from '../services/student-courses.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  public model: StudentCourseDetailModel;
  public isLoading = true;

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
        this.isLoading = false;
        this.model = data;
        this._panelService.setTitle(`Curso: ${this.model.nombre}`);
      });
  }

}
