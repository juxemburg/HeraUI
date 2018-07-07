import { Component, OnInit } from '@angular/core';
import { CreateChallengeModel } from '../../models/application.models';

@Component({
  selector: 'app-create-challenge-form',
  templateUrl: './create-challenge-form.component.html',
  styleUrls: ['./create-challenge-form.component.scss']
})
export class CreateChallengeFormComponent implements OnInit {

  public model: CreateChallengeModel;
  public isLoading = false;

  constructor() { }

  ngOnInit() {
    this.resetModel();
  }

  public resetModel() {
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

}
