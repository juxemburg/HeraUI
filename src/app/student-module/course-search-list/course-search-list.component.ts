import { Component, OnInit } from '@angular/core';
import { StudentCoursesSearchManagerService } from '../courses-search/student-courses-search-manager.service';
import { CourseViewModel } from '../../models/application.models';

@Component({
  selector: 'app-course-search-list',
  templateUrl: './course-search-list.component.html',
  styleUrls: ['./course-search-list.component.scss']
})
export class CourseSearchListComponent implements OnInit {

  public isLoading = true;
  public model: CourseViewModel[] = [];

  constructor(private _mgrService: StudentCoursesSearchManagerService) { }

  ngOnInit() {
    this._mgrService.onLoading
      .subscribe(val => this.isLoading = val);
    this._mgrService.onModelChanged
      .subscribe(data => this.model = data);
  }

}
