import { Component, OnInit } from '@angular/core';
import { StudentCoursesSearchManagerService } from '../courses-search/student-courses-search-manager.service';
import { CourseListModel } from '../../models/application.models';
import { listAnimation } from 'assets/animations/list-fade-in.animation';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-course-search-list',
  templateUrl: './course-search-list.component.html',
  styleUrls: ['./course-search-list.component.scss'],
  animations: [listAnimation]
})
export class CourseSearchListComponent implements OnInit {

  public isLoading = true;
  public model: CourseListModel[] = [];

  constructor(private _mgrService: StudentCoursesSearchManagerService) { }

  ngOnInit() {
    this._mgrService.onLoading
      .pipe(delay(400))
      .subscribe(val => this.isLoading = val);
    this._mgrService.onModelChanged
      .subscribe(data => this.model = data);
  }

}
