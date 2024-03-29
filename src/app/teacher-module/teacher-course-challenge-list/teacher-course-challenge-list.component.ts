import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CourseChallengeModel } from '../../models/application.teacher.models';
import { CourseChallengeListService } from '../services/course-challenge-list.service';

@Component({
  selector: 'app-teacher-course-challenge-list',
  templateUrl: './teacher-course-challenge-list.component.html',
  styleUrls: ['./teacher-course-challenge-list.component.scss']
})
export class TeacherCourseChallengeListComponent implements OnInit {

  @Input()
  public items: CourseChallengeModel[] = [];

  @Input()
  public courseId: number;

  public showForm = false;

  constructor(private _challengesMgr: CourseChallengeListService) { }

  ngOnInit() {
    this.items = this._challengesMgr.model;

    this._challengesMgr.onModelChanged$
      .subscribe(val => this.items = val);
  }

  public itemDropped(event) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    this._challengesMgr.sortChallenges(this.courseId,
      this.items.map(item => item.id));
  }
}
