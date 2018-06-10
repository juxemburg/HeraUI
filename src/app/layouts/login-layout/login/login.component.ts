import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { LoginModel } from '../models/autentication.models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model: LoginModel;
  public isLoading = false;

  constructor(private _cmpService: LoginService) { }

  ngOnInit() {
    this.reset();
  }

  public onLogin() {
    this.isLoading = true;
    this._cmpService.Login(this.model)
      .subscribe(
        data => {
          this.isLoading = false;
          // this._notService.showNotification('Login exitoso', 'success');
        },
        err => {
          this.isLoading = false;
          // this._notService.showNotification('Login fallido', 'error');
          console.error(err);
        });
  }

  private reset() {
    this.model = new LoginModel('', '', true);
  }

}
