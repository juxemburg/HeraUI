import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { LoginModel } from '../models/autentication.models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model: LoginModel;c

  constructor(
    private _cmpService: LoginService
  ) { }

  ngOnInit() {
    this.reset();
  }

  public onLogin() {
    this._cmpService.Login(this.model)
      .subscribe(
        data => {
          // this._notService.showNotification('Login exitoso', 'success');
        },
        err => {
          // this._notService.showNotification('Login fallido', 'error');
          console.error(err);
        });
  }

  private reset() {
    this.model = new LoginModel('', '', true);
  }

}
