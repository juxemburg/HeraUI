import { Component, OnInit } from '@angular/core';
import { CreateChallengeModel } from '../../models/application.models';
import { ChallengeService } from '../services/challenge.service';
import { NotificationService } from '../../shared/services/notification.service';

@Component({
  selector: 'app-create-challenge-form',
  templateUrl: './create-challenge-form.component.html',
  styleUrls: ['./create-challenge-form.component.scss']
})
export class CreateChallengeFormComponent implements OnInit {

  public model: CreateChallengeModel;
  public isLoading = false;

  constructor(
    private _cmpService: ChallengeService,
    private _notService: NotificationService) { }

  ngOnInit() {
    this.resetModel();
  }

  private resetModel() {
    this.model = new CreateChallengeModel('',
      '',
      0,
      '',
      '',
      '',
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false);
  }

  public onProjectIdChanged() {
    this.loadValoration(this.model.idSolucion);
  }

  private loadValoration(projectId: number) {
    this.isLoading = true;
    this._cmpService.getValoration(projectId)
      .subscribe(data => this.model.mapInfo(data),
        _ => {
          this._notService.showError('id de projecto inválido');
          this.isLoading = false;
        },
        () => {
          this.isLoading = false;
          console.log('finished');
        });
  }

}
