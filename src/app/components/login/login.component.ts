import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/components/login/login.service';
import { Router } from '@angular/router';
import { LoginModel, UserInfoModel } from 'app/models/autentication.models';


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
          this.loginRoute(data);
        },
        err => {
          this.isLoading = false;
          // this._notService.showNotification('Login fallido', 'error');
          console.error(err);
        });
  }

  private loginRoute(userInfo: UserInfoModel) {
    let route = '';
    switch (userInfo.role) {
      case 'Profesor':
        route = 'dashboard/teacher/courses';
        break;
      case 'student/courses':
        route = '';
        break;
      default:
        break;
    }
    this._router.navigate([route]);
  }

  private reset() {
    this.model = new LoginModel('', '', true);
  }

}
