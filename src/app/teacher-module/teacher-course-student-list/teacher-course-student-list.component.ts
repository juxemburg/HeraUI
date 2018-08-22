import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teacher-course-student-list',
  templateUrl: './teacher-course-student-list.component.html',
  styleUrls: ['./teacher-course-student-list.component.scss']
})
export class TeacherCourseStudentListComponent implements OnInit {

  @Input()
  public modelList: Map<number, string>;

  public model: any[] = [];

  constructor() { }

  ngOnInit() {
    Object.keys(this.modelList).forEach(key =>
      this.model.push({
        id: key,
        name: this.modelList[key]
      }));
    console.log(this.model);

  }

}
