import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/components/login/login.service';
import { LoginModel } from 'app/models/autentication.models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model: LoginModel;
  public isLoading = false;

  constructor(
    private _cmpService: LoginService
  ) { }

  ngOnInit() {
    this.reset();
  }

  public onLogin() {
    this.isLoading = true;
    this._cmpService.Login(this.model)
      .subscribe(
        () => {
          this.isLoading = false;
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
