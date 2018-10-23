import { Component, OnInit, Input } from '@angular/core';
import { CalificacionInfoModel } from '../../models/application.student.models';
import { CourseChallengeManagerService } from '../course-challenge/course-challenge-manager.service';
import { Tuple } from 'app/shared/models/shared.models';

@Component({
  selector: 'app-course-challenge-grade',
  templateUrl: './course-challenge-grade.component.html',
  styleUrls: ['./course-challenge-grade.component.scss']
})
export class CourseChallengeGradeComponent implements OnInit {

  @Input()
  public model: CalificacionInfoModel;

  public colabs: Tuple<number, string>[] = [];

  public colab1 = 0;
  public colab2 = 0;


  public isLoading = false;

  public projectId = 0;

  constructor(private mgrService: CourseChallengeManagerService) { }

  ngOnInit() {
    this.mgrService.GetStudentMetadata()
      .subscribe(data => this.colabs = data, _ => { });
  }

  public onaddGrade() {
    this.isLoading = true;
    const cols = [this.colab1, this.colab2];
    this.mgrService.CreateRecord(cols.filter(item => item > 0))
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
