import { Component, OnInit } from '@angular/core';
import { CourseChallengeManagerService } from './course-challenge-manager.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { CalificacionesDesafioModel } from '../../models/application.student.models';
import { NavbarPanelService } from '../../shared/navbar-panel/navbar-panel.service';

@Component({
  selector: 'app-course-challenge',
  templateUrl: './course-challenge.component.html',
  styleUrls: ['./course-challenge.component.scss'],
  providers: [CourseChallengeManagerService]
})
export class CourseChallengeComponent implements OnInit {

  public isLoading = true;

  public model: CalificacionesDesafioModel;

  constructor(
    private _mgrService: CourseChallengeManagerService,
    private _route: ActivatedRoute,
    private _titleService: NavbarPanelService) { }

  ngOnInit() {
    this.isLoading = true;

    this._titleService.setTitle('');

    this._mgrService.onIsLoading
      .subscribe(val => this.isLoading = val);

    this._mgrService.onModelChanged$
      .subscribe(val => {
        this.model = val;
        this._titleService.setTitle(`Desafío: ${this.model.nombre}`)
      });

    this._route.params.subscribe(params => {
      this._mgrService
        .LoadModel(+params['courseId'], +params['challengeId']);
    });
  }

}
