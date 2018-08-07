import { Component, OnInit, Input } from '@angular/core';
import { CalificacionInfoModel } from '../../models/application.student.models';
import { CourseChallengeManagerService } from '../course-challenge/course-challenge-manager.service';

@Component({
  selector: 'app-course-challenge-grade',
  templateUrl: './course-challenge-grade.component.html',
  styleUrls: ['./course-challenge-grade.component.scss']
})
export class CourseChallengeGradeComponent implements OnInit {

  @Input()
  public model: CalificacionInfoModel;

  public isLoading = false;

  public projectId = 0;

  constructor(private mgrService: CourseChallengeManagerService) { }

  ngOnInit() {
  }

  public onaddGrade() {
    this.isLoading = true;
    this.mgrService.CreateRecord()
      .subscribe(grade => {
        this.model = grade;
        this.isLoading = false;
      }, _ => {
        this.isLoading = false;
      });
  }

  public onStartGrade() {
    if (!this.model) { return; }

    this.isLoading = true;
    this.mgrService.StartRecord(this.model.id)
      .subscribe(grade => {
        this.model = grade;
        this.isLoading = false;
      }, _ => {
        this.isLoading = false;
      });
  }

  public onEndGrade() {
    if (!this.model) { return; }

    this.isLoading = true;
    this.mgrService.EndRecord(this.model.id, `${this.projectId}`)
      .subscribe(grade => {
        this.model = grade;
        this.isLoading = false;
      }, _ => {
        this.isLoading = false;
      });
  }

}
