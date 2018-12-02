import { Component, OnInit, Input } from '@angular/core';
import { StudentChallengeService } from '../services/student-challenge.service';
import { EstudianteDesafioResultadoViewModel } from 'app/models/application.student.models';

@Component({
  selector: 'app-course-challenge-peers-result-table',
  templateUrl: './course-challenge-peers-result-table.component.html',
  styleUrls: ['./course-challenge-peers-result-table.component.scss']
})
export class CourseChallengePeersResultTableComponent implements OnInit {
  @Input()
  public courseId: number;

  @Input()
  public challengeId: number;

  private _model: EstudianteDesafioResultadoViewModel[] = [];
  public get model(): EstudianteDesafioResultadoViewModel[] {
    return this._model;
  }
  public set model(v: EstudianteDesafioResultadoViewModel[]) {
    this._model = v;
    this.isloading = false;
  }

  public isloading = true;
  constructor(private _studentChallengeService: StudentChallengeService) {}

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.isloading = true;
    this._studentChallengeService
      .GetPeerResult(this.courseId, this.challengeId)
      .subscribe(data => (this.model = data), _ => (this.isloading = false));
  }
}
