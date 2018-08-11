import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../models/autentication.models';
import { LoginService } from '../services/login.service';
import { NotificationService } from '../../shared/services/notification.service';


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
    private _notService: NotificationService
  ) { }

  ngOnInit() {
    this.reset();
  }

  public onLogin() {
    this.isLoading = true;
    this._cmpService.Login(this.model)
      .subscribe(
        () => {
          this._notService.showNotification('Login exitoso', 'success');
        },
        err => {
          this.isLoading = false;
          this._notService.showError('Login fallido');
          console.error(err);
        });
  }


  private reset() {
    this.model = new LoginModel('', '', true);
  }

}
