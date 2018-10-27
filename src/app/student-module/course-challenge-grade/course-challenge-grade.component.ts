import { Component, OnInit, Input } from '@angular/core';
import { CalificacionInfoModel } from '../../models/application.student.models';
import { CourseChallengeManagerService } from '../course-challenge/course-challenge-manager.service';
import { Tuple } from 'app/shared/models/shared.models';
import { UserInfoViewModel } from 'app/models/autentication.models';
import { UserService } from 'app/shared/services/user.service';

@Component({
  selector: 'app-course-challenge-grade',
  templateUrl: './course-challenge-grade.component.html',
  styleUrls: ['./course-challenge-grade.component.scss']
})
export class CourseChallengeGradeComponent implements OnInit {

  @Input()
  public model: CalificacionInfoModel;

  @Input()
  public sceneUrl: string;

  public user: UserInfoViewModel;

  public colabs: Tuple<number, string>[] = [];

  public colab1 = 0;
  public colab2 = 0;


  public isLoading = false;

  public projectId = 0;

  constructor(
    private _usrService: UserService,
    private _mgrService: CourseChallengeManagerService) { }

  ngOnInit() {
    this._mgrService.GetStudentMetadata()
      .subscribe(data => this.colabs = data, _ => { });
    this.user = this._usrService.getUserInfo();
  }

  public onaddGrade() {
    this.isLoading = true;
    this._mgrService.CreateRecord()
      .subscribe(grade => {
        this.model = grade;
        this.isLoading = false;
      }, _ => {
        this.isLoading = false;
      });
  }

  public onStartGrade() {
    if (!this.model) { return; }

    const cols = [this.colab1, this.colab2];
    this.isLoading = true;
    this._mgrService.StartRecord(this.model.id, cols.filter(item => item > 0))
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
    this._mgrService.EndRecord(this.model.id, `${this.projectId}`)
      .subscribe(grade => {
        this.model = grade;
        this.isLoading = false;
      }, _ => {
        this.isLoading = false;
      });
  }

}
