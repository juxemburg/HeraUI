import { Component, OnInit } from '@angular/core';
import { RegisterStudentModel, StudentRegistrationMetadata } from '../../models/autentication.models';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {

  public isLoading = false;

  public model: RegisterStudentModel;
  public metadata: StudentRegistrationMetadata;

  constructor(private _cmpService: LoginService) { }

  ngOnInit() {
    this.initModel();
    this.loadMetadata();
  }

  private loadMetadata(): void {
    this.isLoading = true;
    this._cmpService.GetStudentRegistrationMetadata()
      .subscribe(data => {
        this.metadata = data;
        this.isLoading = false;
      }, err => console.log(err));
  }

  private initModel() {
    this.model = new RegisterStudentModel(
      '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0);
  }

  public do_Registration() {
    this.isLoading = true;
    this._cmpService.RegisterStudent(this.model)
      .subscribe(data => {
        this.isLoading = false;
        console.log('Registro exitoso');
        console.log(data);
      }, err => {
        this.isLoading = false;
        console.log(err);
      });
  }

}
