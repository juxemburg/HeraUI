import { Component, OnInit } from '@angular/core';
import { CreateChallengeModel } from '../../models/application.models';
import { ChallengeService } from '../services/challenge.service';
import { NotificationService } from '../../shared/services/notification.service';
import { OptionModel } from 'app/models/common.models';

@Component({
  selector: 'app-create-challenge-form',
  templateUrl: './create-challenge-form.component.html',
  styleUrls: ['./create-challenge-form.component.scss']
})
export class CreateChallengeFormComponent implements OnInit {
  public model: CreateChallengeModel;
  public metadata: OptionModel[] = [];
  public isLoading = false;

  constructor(
    private _cmpService: ChallengeService,
    private _notService: NotificationService
  ) {}

  ngOnInit() {
    this.loadMetadata();
    this.resetModel();
  }

  private resetModel() {
    this.model = new CreateChallengeModel(
      '',
      '',
      0,
      '',
      'dir',
      '',
      0,
      '',
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
      false
    );
  }

  private loadMetadata() {
    this._cmpService
      .getMetadata()
      .subscribe(data => (this.metadata = data), _ => {});
  }

  public onProjectUrlChanged() {
    const projectId: any = this.model.urlSolucion.match('[^/]+(?=/$|$)');
    if (!isNaN(projectId[0])) {
      this.model.idSolucion = <number>projectId[0];
      this.loadValoration(this.model.idSolucion);
    } else {
      this.model.idSolucion = 0;
      this.model.urlSolucion = '';
    }
  }

  public onFormSubmit() {
    this.createChallenge();
  }

  private createChallenge() {
    this.isLoading = true;
    this._cmpService.createChallenge(this.model).subscribe(
      _ => {
        this.resetModel();
        this.isLoading = false;
        this._notService.showSuccess('Desafío creado exitosamente');
      },
      err => {
        this.isLoading = false;
        console.log(err);
        this._notService.showError(err);
      }
    );
  }

  private loadValoration(projectId: number) {
    this.isLoading = true;
    this._cmpService.getValoration(projectId).subscribe(
      data => this.model.mapInfo(data),
      _ => {
        this._notService.showError('id de projecto inválido');
        this.model.idSolucion = 0;
        this.model.urlSolucion = '';
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
        console.log('finished');
      }
    );
  }
}
