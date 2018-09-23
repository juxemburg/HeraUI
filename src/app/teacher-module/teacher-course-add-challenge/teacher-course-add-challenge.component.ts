import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { CourseChallengeListService } from '../services/course-challenge-list.service';

@Component({
  selector: 'app-teacher-course-add-challenge',
  templateUrl: './teacher-course-add-challenge.component.html',
  styleUrls: ['./teacher-course-add-challenge.component.scss']
})
export class TeacherCourseAddChallengeComponent implements OnInit {

  @Input()
  public courseId: number;

  public challengeId = -1;

  private _onSubmittinSource = new Subject<boolean>();
  public onSubmitting$ = this._onSubmittinSource.asObservable();

  constructor(
    private _mgrService: CourseChallengeListService) { }

  ngOnInit() {
    this._mgrService.onIsLoading.subscribe(val => this._onSubmittinSource.next(val));
  }

  Submitted() {
    this._mgrService.AddChallenge(this.courseId, this.challengeId);
  }

}
