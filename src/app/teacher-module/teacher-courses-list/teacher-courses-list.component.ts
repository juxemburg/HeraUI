import { Component, OnInit } from '@angular/core';
import { CourseViewModel } from '../../models/application.models';
import { CourseManagerService } from '../teacher-courses/services/course-manager.service';

@Component({
  selector: 'app-teacher-courses-list',
  templateUrl: './teacher-courses-list.component.html',
  styleUrls: ['./teacher-courses-list.component.scss']
})
export class TeacherCoursesListComponent implements OnInit {

  public model: CourseViewModel[] = [];
  public isLoading = true;


  constructor(private _mgrService: CourseManagerService) { }

  ngOnInit() {
    this._mgrService.onLoading.subscribe(val => this.isLoading = val);
    this._mgrService.onModelChanged
      .subscribe(data => this.model = data);
    this._mgrService.SearchCourse('');
  }

}
