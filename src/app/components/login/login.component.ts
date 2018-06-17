import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'app/layouts/login-layout/models/autentication.models';
import { LoginService } from 'app/components/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model: LoginModel;
  public isLoading = false;

  constructor(
    private _cmpService: LoginService,
    private _router: Router
  ) { }

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
          this._router.navigate(['']);
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
