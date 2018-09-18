import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentChallengeService } from '../services/student-challenge.service';
import { CalificacionResultadoModel } from '../../models/application.student.models';
import { ActivatedRoute } from '@angular/router';
import { NavbarPanelService } from '../../shared/navbar-panel/navbar-panel.service';
import { fadeAnimation } from 'assets/animations/fade.animation';
import { CourseChallengeResultFinishedComponent } from '../course-challenge-result-finished/course-challenge-result-finished.component';

@Component({
  selector: 'app-course-challenge-result',
  templateUrl: './course-challenge-result.component.html',
  styleUrls: ['./course-challenge-result.component.scss'],
  animations: [fadeAnimation]
})
export class CourseChallengeResultComponent implements OnInit {

  public model: CalificacionResultadoModel;
  public isLoading = true;
  public animationState = '';

  @ViewChild(CourseChallengeResultFinishedComponent)
  public resultsComponent: CourseChallengeResultFinishedComponent;


  private set Model(val: CalificacionResultadoModel) {
    this.model = val;
    this.isLoading = false;
  }

  constructor(
    private _studentChallengeSer: StudentChallengeService,
    private _navbarPanelSer: NavbarPanelService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this.animationState = 'in';
    this._navbarPanelSer.setTitle('Resultados');
    this._route.params.subscribe(params => {
      this.loadModel(
        +params['courseId'],
        +params['challengeId'],
        +params['gradeId']);
    });
  }

  private loadModel(courseId: number,
    challengeId: number, gradeId: number) {
    this.isLoading = true;
    this._studentChallengeSer
      .GetResult(courseId, challengeId, gradeId)
      .subscribe(data =>
        this.Model = data,
        _ => this.isLoading = false);
  }

  public showResults() {
    this.resultsComponent.Show();
  }

}
