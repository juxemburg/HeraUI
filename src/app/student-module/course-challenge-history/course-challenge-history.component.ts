import { Component, OnInit } from '@angular/core';
import { CalificacionInfoModel } from '../../models/application.student.models';
import { CourseChallengeManagerService } from '../course-challenge/course-challenge-manager.service';

@Component({
  selector: 'app-course-challenge-history',
  templateUrl: './course-challenge-history.component.html',
  styleUrls: ['./course-challenge-history.component.scss']
})
export class CourseChallengeHistoryComponent implements OnInit {

  public model: CalificacionInfoModel[] = [];
  public isLoading = false;

  constructor(private _mgrService: CourseChallengeManagerService) { }

  ngOnInit() {
    this.model = this._mgrService.model.calificaciones || [];
    this._mgrService.onModelChanged$
      .subscribe(val => this.model = val.calificaciones);

    this._mgrService.onIsLoading
      .subscribe(val => this.isLoading = val);
  }

}
