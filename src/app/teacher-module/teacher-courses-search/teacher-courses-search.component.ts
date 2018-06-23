import { Component, OnInit } from '@angular/core';
import { CourseManagerService } from '../teacher-courses/services/course-manager.service';

@Component({
  selector: 'app-teacher-courses-search',
  templateUrl: './teacher-courses-search.component.html',
  styleUrls: ['./teacher-courses-search.component.scss']
})
export class TeacherCoursesSearchComponent implements OnInit {

  public searchString = '';

  constructor(private _courseManager: CourseManagerService) { }

  ngOnInit() {
  }

  public search(): void {
    this._courseManager.SearchCourse(this.searchString);
  }

}
