import { Component, OnInit } from '@angular/core';
import { RegisterProfesorModel } from '../../models/autentication.models';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.scss']
})
export class RegisterTeacherComponent implements OnInit {

  public isLoading = false;
  public model: RegisterProfesorModel;

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    this.resetModel();
  }

  private resetModel() {
    this.model =
      new RegisterProfesorModel('', '', '', '', '', 0);
  }

  public do_Registation() {
    this.isLoading = true;
    this._loginService.RegisterTeacher(this.model)
      .subscribe(data => {
        console.log('Registro exitoso');
        this.isLoading = false;
      },
        err => {
          console.log(err);
          this.isLoading = false;
        });
  }

}
